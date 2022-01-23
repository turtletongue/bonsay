import { Id, Product } from '../../declarations';

interface ProductsFilters {
  price: {
    min: number;
    max: number;
  };
  age: {
    min: number;
    max: number;
  };
  categories: {
    [key: Id]: true;
  };
  sortId?: Id;
  search: string;
}

export interface ProductsState {
  total: number;
  data: Product[];
  loading: 'idle' | 'pending';
  error?: string;
  filters: ProductsFilters;
  page: number;
}

export type FetchProductsParams = {
  page: number;
  filters: ProductsFilters;
};
