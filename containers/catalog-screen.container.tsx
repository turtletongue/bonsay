import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  fetchProducts,
  selectIsLoading,
  selectProducts,
  selectTotal,
  selectFilters,
  selectSearch,
  setSearch,
  selectPage,
  setPage,
  sortByOneCategory,
} from '../store/products/products.slice';
import Search from '../components/search.component';
import Pagination from '../components/pagination.component';
import ProductsGrid from './products-grid.container';
import Filters from './filters.container';
import FiltersDialog from './filters-dialog.container';

export const CatalogScreen = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const total = useAppSelector(selectTotal);
  const products = useAppSelector(selectProducts);
  const filters = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);

  const pageNumber = useAppSelector(selectPage);

  const {
    query: { category },
  } = useRouter();

  useEffect(() => {
    if (category) {
      dispatch(sortByOneCategory(category.toString()));
    }
  }, [dispatch, category]);

  useEffect(() => {
    dispatch(setPage(1));
  }, [dispatch]);

  useEffect(() => {
    const categoriesFilter = Object.keys(filters.categories);

    if (!category || categoriesFilter.includes(String(category))) {
      dispatch(fetchProducts({ page: pageNumber, filters }));
    }
  }, [dispatch, pageNumber, filters, category]);

  const changeSearchValue = (event) => {
    dispatch(setSearch(event.target.value));

    dispatch(setPage(1));
  };

  return (
    <div className="flex flex-col items-center w-full my-5">
      <div className="flex flex-row justify-center items-center w-full mb-3">
        <div className="ml-6 sm:ml-0">
          <Search value={search} onChange={changeSearchValue} />
        </div>
        <div className="block sm:hidden mx-4">
          <FiltersDialog />
        </div>
      </div>
      <div className="flex flex-row space-around my-6">
        <Filters className="hidden sm:block" />
        <ProductsGrid products={products} isLoading={isLoading} />
      </div>
      <Pagination pageNumber={pageNumber} total={total} />
    </div>
  );
};

export default CatalogScreen;
