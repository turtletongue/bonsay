import { Token } from 'react-stripe-checkout';

import { CartItem } from '../../declarations';
export interface OrderState {
  fullname: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    house: string;
    postcode: string;
  };
  phone: string;
  loading: 'idle' | 'pending';
  success: boolean;
  error?: string;
}

export interface CreateOrderRequest {
  accessToken: string;

  fullname: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    house: string;
    postcode: string;
  };
  phone: string;

  token: Token;

  total: number;

  cartItems: CartItem[];
}
