import CartItemIncreaseButton from '@components/cart-item-increase-button.component';
import CartItemDecreaseButton from '@components/cart-item-decrease-button.component';
import CartItemDeleteButton from '@components/cart-item-delete-button.component';
import CartItemImage from '@components/cart-item-image.component';

import { Product } from '@app/declarations';

interface CartItemProps {
  product: Product;
  qty: number;
}

export const CartItem = ({ product, qty }: CartItemProps) => {
  const { id, name, price } = product;

  return (
    <div className="grid grid-cols-4 justify-center sm:justify-start items-center my-4">
      <div className="flex flex-col h-full p-2 sm:p-6 items-center justify-between">
        <div className="text-sm text-primary font-medium mb-2">{name}</div>
        <CartItemImage product={product} />
        <CartItemDeleteButton id={id} />
      </div>
      <div className="flex items-center justify-center p-0 sm:p-4">
        <CartItemDecreaseButton id={id} />
        <span className="mx-4 select-none">{qty}</span>
        <CartItemIncreaseButton product={product} />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="my-4 select-none">
            {(price * qty).toLocaleString()} ₽
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
