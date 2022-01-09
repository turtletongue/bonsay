import { OrderState } from './order.declarations';

export const initialState: OrderState = {
  fullname: {
    firstname: '',
    lastname: '',
  },
  address: {
    city: '',
    street: '',
    house: '',
    postcode: '',
  },
  phone: '',
  loading: 'idle',
  success: false,
  error: undefined,
};

export default initialState;
