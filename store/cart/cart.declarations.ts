import { CartItem, Id } from '@app/declarations';

export interface CartState {
  items: {
    [key: Id]: CartItem;
  };
}
