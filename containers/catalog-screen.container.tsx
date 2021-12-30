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
  setSearch
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

  const { query, pathname } = useRouter();

  const { page } = query;
  const pageNumber = +page || 1;

  useEffect(() => {
    dispatch(fetchProducts({ page: pageNumber, filters }));
  }, [dispatch, pageNumber, filters]);

  const changeSearchValue = (event) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <div className='flex flex-col items-center w-full my-5'>
      <div className='flex flex-row justify-center items-center w-full mb-3'>
        <div className='ml-6 sm:ml-0'>
          <Search value={search} onChange={changeSearchValue} />
        </div>
        <div className='block sm:hidden mx-4'>
          <FiltersDialog />
        </div>
      </div>
      <div className='flex flex-row space-around my-6'>
        <Filters className='hidden sm:block' />
        <ProductsGrid products={products} />
      </div>
      <Pagination pageNumber={pageNumber} total={total} url={pathname} />
    </div>
  );
};

export default CatalogScreen;
