import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';

interface CartItemProps {
  imageUrl: string;
  title: string;
  price: number;
  qty: number;
}

export const CartItem = ({ imageUrl, title, price, qty }: CartItemProps) => {
  return (
    <div className='grid grid-cols-4 justify-center items-center'>
      <div className='overflow-hidden max-w-xs'>
        <Image src={imageUrl} width={222} height={261} alt={title} />
      </div>
      <div className='flex flex-col h-full p-6 items-center justify-center max-w-xs'>
        <div className='flex flex-col items-center'>
          <div className='text-secondary font-medium'>{title}</div>
          <div className='my-4'>{price.toFixed(2)} ₽</div>
          <div className='flex items-center'>
            <ChevronLeftIcon className='w-5 h-5 cursor-pointer' />
            <span className='mx-4'>{qty}</span>
            <ChevronRightIcon className='w-5 h-5 cursor-pointer' />
          </div>
        </div>
        <TrashIcon className='cursor-pointer h-5 w-5 my-4' color='#D11A2A' />
      </div>
    </div>
  );
};

export default CartItem;
