import { ChevronLeftIcon } from '@heroicons/react/solid';

import { useAppDispatch } from '@app/hooks';
import { decreaseProductQty } from '@store/cart/cart.slice';

import { Id } from '@app/declarations';

interface CartItemDecreaseButton {
  id: Id;
}

export const CartItemDecreaseButton = ({ id }: CartItemDecreaseButton) => {
  const dispatch = useAppDispatch();

  const onDecreaseQty = () => {
    dispatch(decreaseProductQty(id));
  };

  return (
    <ChevronLeftIcon
      className="w-5 h-5 cursor-pointer"
      onClick={onDecreaseQty}
    />
  );
};

export default CartItemDecreaseButton;
