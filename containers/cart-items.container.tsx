import CartItem from './cart-item.containter';
import { DEFAULT_PRODUCT_IMAGE } from '../variables';

import { CartItem as CartItemData } from '../declarations';

interface CartItemsProps {
  items: CartItemData[];
}

export const CartItems = ({ items }: CartItemsProps) => {
  return (
    <div className="py-4 min-h-screen">
      {items.map((item) => (
        <CartItem key={item.product.id} product={item.product} qty={item.qty} />
      ))}
    </div>
  );
};

export default CartItems;
