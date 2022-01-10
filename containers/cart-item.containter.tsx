import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import { useAppDispatch } from '../hooks';
import {
  decreaseProductQty,
  increaseProductQty,
  removeFromCart,
} from '../store/cart/cart.slice';
import { DEFAULT_PRODUCT_IMAGE } from '../variables';
import { IMAGE_API_URL } from '../api';

import { Product } from '../declarations';
interface CartItemProps {
  product: Product;
  qty: number;
}

export const CartItem = ({ product, qty }: CartItemProps) => {
  const { id, name, upload, path, price } = product;

  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(removeFromCart(id));
  };

  const onIncreaseQty = () => {
    dispatch(increaseProductQty(product));
  };

  const onDecreaseQty = () => {
    dispatch(decreaseProductQty(id));
  };

  return (
    <div className="grid grid-cols-4 justify-center sm:justify-start items-center my-4">
      <div className="flex flex-col h-full p-2 sm:p-6 items-center justify-between">
        <div className="text-sm text-primary font-medium mb-2">{name}</div>
        <Image
          src={IMAGE_API_URL + (path || upload?.path || DEFAULT_PRODUCT_IMAGE)}
          width={110}
          height={140}
          alt={name}
          className="select-none"
        />
        <div
          className="text-gray font-medium text-xs cursor-pointer hover:text-red select-none mt-2"
          onClick={onDelete}
        >
          Удалить
        </div>
      </div>
      <div className="flex items-center justify-center p-0 sm:p-4">
        <ChevronLeftIcon
          className="w-5 h-5 cursor-pointer"
          onClick={onDecreaseQty}
        />
        <span className="mx-4 select-none">{qty}</span>
        <ChevronRightIcon
          className="w-5 h-5 cursor-pointer"
          onClick={onIncreaseQty}
        />
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
