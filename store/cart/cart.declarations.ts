import { CartItem, Id } from '../../declarations';

export interface CartState {
  items: {
    [key: Id]: CartItem;
  };
}
