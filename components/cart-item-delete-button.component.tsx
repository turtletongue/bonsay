import { useAppDispatch } from '@app/hooks';
import { removeFromCart } from '@store/cart/cart.slice';

import { Id } from '@app/declarations';

interface CartItemDeleteButtonProps {
  id: Id;
}

export const CartItemDeleteButton = ({ id }: CartItemDeleteButtonProps) => {
  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div
      className="text-gray font-medium text-sm cursor-pointer hover:text-red select-none"
      onClick={onDelete}
    >
      Удалить
    </div>
  );
};

export default CartItemDeleteButton;
