import { Fragment } from 'react';

import CartItem from '@containers/cart-item.containter';

import { CartItem as CartItemData } from '@app/declarations';

interface CartItemsProps {
  items: CartItemData[];
}

export const CartItems = ({ items }: CartItemsProps) => {
  return (
    <div className="py-4">
      {items.map((item, index) => (
        <Fragment key={item.product.id}>
          <CartItem product={item.product} />
          {index !== items.length - 1 && (
            <hr className="max-w-5xl mx-auto opacity-30" />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default CartItems;
