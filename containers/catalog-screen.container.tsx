import { useEffect } from 'react';

import Search from '@components/search.component';
import Pagination from '@components/pagination.component';
import ProductsGrid from '@containers/products-grid.container';
import Filters from '@containers/filters.container';
import FiltersDialog from '@containers/filters-dialog.container';
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
} from '@store/products/products.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const CatalogScreen = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const total = useAppSelector(selectTotal);
  const products = useAppSelector(selectProducts);
  const filters = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);

  const pageNumber = useAppSelector(selectPage);

  useEffect(() => {
    dispatch(setPage(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts({ page: pageNumber, filters }));
  }, [dispatch, pageNumber, filters]);

  const changeSearchValue = (event) => {
    dispatch(setSearch(event.target.value));

    dispatch(setPage(1));
  };

  const onPageChange = (page: number) => {
    return () => {
      dispatch(setPage(page));
    };
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
        <div className="relative">
          <ProductsGrid
            products={products}
            isLoading={isLoading}
            className="max-w-6xl justify-center"
          />
          {products.length === 0 && !isLoading && (
            <div className="absolute top-[6rem] sm:top-[45%] w-full items-center uppercase text-secondary text-xl text-bold font-medium text-center">
              Ничего не найдено
            </div>
          )}
        </div>
      </div>
      <Pagination
        pageNumber={pageNumber}
        total={total}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default CatalogScreen;
