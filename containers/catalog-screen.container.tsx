import { useRouter } from 'next/router';

import Search from '../components/search.component';
import Pagination from '../components/pagination.component';
import ProductsGrid from './products-grid.container';
import Filters from './filters.container';
import FiltersDialog from './filters-dialog.container';

import { Product } from '../declarations';

interface CatalogScreenProps {
  products: Product[];
  total: number;
}

export const CatalogScreen = ({ products, total }: CatalogScreenProps) => {
  const { query, pathname } = useRouter();

  const { page } = query;
  const pageNumber = +page || 1;

  return (
    <div className='flex flex-col items-center w-full my-5'>
      <div className='flex flex-row justify-center items-center w-full mb-3'>
        <div className='ml-6 sm:ml-0'>
          <Search />
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
