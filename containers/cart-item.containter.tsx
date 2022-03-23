import CartItemDeleteButton from '@components/cart-item-delete-button.component';
import CartItemImage from '@components/cart-item-image.component';

import { Product } from '@app/declarations';

interface CartItemProps {
  product: Product;
}

export const CartItem = ({ product }: CartItemProps) => {
  const { id, name, price } = product;

  return (
    <div className="grid grid-cols-3-fill max-w-7xl justify-center items-center my-4 mx-auto">
      <div className="flex flex-col h-full p-2 items-center justify-between">
        <div className="text-sm text-primary font-medium mb-2">{name}</div>
        <CartItemImage product={product} />
      </div>
      <div className="flex items-center justify-center p-0 sm:p-4">
        <div className="select-none">{price.toLocaleString('ru')} ₽</div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <CartItemDeleteButton id={id} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
