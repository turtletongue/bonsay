import { useAppDispatch } from '../hooks';
import { removeFromCart } from '../store/cart/cart.slice';

import { Id } from '../declarations';

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
      className="text-gray font-medium text-xs cursor-pointer hover:text-red select-none mt-2"
      onClick={onDelete}
    >
      Удалить
    </div>
  );
};

export default CartItemDeleteButton;
