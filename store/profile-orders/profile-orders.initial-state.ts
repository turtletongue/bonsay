import { ProfileOrdersState } from './profile-orders.declarations';

export const initialState: ProfileOrdersState = {
  total: 0,
  orders: [],
  loading: 'idle',
  error: undefined,
  page: 1,
  success: false,
};

export default initialState;
