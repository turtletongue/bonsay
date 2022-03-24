import { ProfileOrdersState } from './profile-orders.declarations';

export const initialState: ProfileOrdersState = {
  total: 0,
  orders: [],
  loading: 'idle',
  error: undefined,
  success: false,
};

export default initialState;
