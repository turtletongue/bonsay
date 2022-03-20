import {
  DEFAULT_AGE_MAXIMUM,
  DEFAULT_AGE_MINIMUM,
  DEFAULT_PRICE_MAXIMUM,
  DEFAULT_PRICE_MINIMUM,
} from '@app/variables';

import { ProductsState } from './products.declarations';

export const initialState: ProductsState = {
  total: 0,
  data: [],
  loading: 'idle',
  error: undefined,
  filters: {
    price: {
      min: DEFAULT_PRICE_MINIMUM,
      max: DEFAULT_PRICE_MAXIMUM,
    },
    age: {
      min: DEFAULT_AGE_MINIMUM,
      max: DEFAULT_AGE_MAXIMUM,
    },
    categories: {},
    isFilterByOneCategory: false,
    sortId: '',
    search: '',
  },
  page: 1,
};

export default initialState;
