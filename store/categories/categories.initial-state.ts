import { CategoriesState } from './categories.declarations';

export const initialState: CategoriesState = {
  data: [],
  loading: 'idle',
  error: undefined
};

export default initialState;
