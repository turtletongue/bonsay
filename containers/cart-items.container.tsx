import { Fragment } from 'react';

import CartItem from '@containers/cart-item.containter';

import { CartItem as CartItemData } from '@app/declarations';

interface CartItemsProps {
  items: CartItemData[];
}

export const CartItems = ({ items }: CartItemsProps) => {
  return (
    <div className="py-4">
      {items.map((item) => (
        <CartItem key={item.product.id} product={item.product} />
      ))}
    </div>
  );
};

export default CartItems;
