import { ChevronRightIcon } from '@heroicons/react/solid';

import { useAppDispatch } from '../hooks';
import { increaseProductQty } from '../store/cart/cart.slice';

import { Product } from '../declarations';

interface CartItemIncreaseButton {
  product: Product;
}

export const CartItemIncreaseButton = ({ product }: CartItemIncreaseButton) => {
  const dispatch = useAppDispatch();

  const onIncreaseQty = () => {
    dispatch(increaseProductQty(product));
  };

  return (
    <ChevronRightIcon
      className="w-5 h-5 cursor-pointer"
      onClick={onIncreaseQty}
    />
  );
};

export default CartItemIncreaseButton;
