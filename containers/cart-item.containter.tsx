import Image from 'next/image';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

interface CartItemProps {
  imageUrl: string;
  title: string;
  price: number;
  qty: number;
}

export const CartItem = ({ imageUrl, title, price, qty }: CartItemProps) => {
  return (
    <div className='grid grid-cols-4 justify-center sm:justify-start items-center my-4'>
      <div className='flex flex-col h-full p-2 sm:p-6 items-center justify-between'>
        <div className='text-sm text-primary font-medium mb-2'>{title}</div>
        <Image src={imageUrl} width={110} height={140} alt={title} />
        <div className='text-gray font-medium text-xs cursor-pointer hover:text-red select-none mt-2'>
          Удалить
        </div>
      </div>
      <div className='flex items-center justify-center p-0 sm:p-4'>
        <ChevronLeftIcon className='w-5 h-5 cursor-pointer' />
        <span className='mx-4'>{qty}</span>
        <ChevronRightIcon className='w-5 h-5 cursor-pointer' />
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center'>
          <div className='my-4'>{price.toFixed(2)} ₽</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
