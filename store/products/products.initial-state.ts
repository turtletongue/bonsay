import { DEFAULT_FETCH_LIMIT } from '../../variables';

import { ProductsState } from './products.declarations';

export const initialState: ProductsState = {
  catalog: {
    loading: 'idle',
    error: undefined,
    data: [],
    pagination: {
      $limit: DEFAULT_FETCH_LIMIT,
      $skip: 0
    }
  }
};

export default initialState;
