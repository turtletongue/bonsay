import { Id, PaginationData } from '../../declarations';

export interface Product {
  id: Id;
  name: string;
  description: string;
  age: number;
  height: number;
  price: number;

  upload?: {
    path: string;
  };

  similarProducts?: Product[];

  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ProductsState {
  catalog: {
    loading: 'idle' | 'pending';
    error?: string;
    data: Product[];
    pagination: PaginationData;
  };
}
