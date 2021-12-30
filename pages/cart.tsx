import Head from 'next/head';

import {
  selectCartItems,
  selectCartItemsCount,
  selectTotal
} from '../store/cart/cart.slice';
import { useAppSelector } from '../hooks';
import CartItems from '../containers/cart-items.container';
import CartTotal from '../containers/cart-total.container';
import Void from '../containers/void.container';

export const SignIn = () => {
  const cartItems = useAppSelector(selectCartItems);
  const total = useAppSelector(selectTotal);
  const cartItemsCount = useAppSelector(selectCartItemsCount);

  return (
    <>
      <Head>
        <title>Корзина | BONSAY</title>
      </Head>
      {cartItemsCount > 0 ? (
        <div className='w-full relative'>
          <CartItems items={cartItems} />
          <div className='hidden md:block absolute right-12 top-12'>
            <CartTotal total={total} />
          </div>
          <div className='flex justify-center mb-4 w-full md:hidden'>
            <CartTotal total={total} />
          </div>
        </div>
      ) : (
        <Void text='КОРЗИНА ПУСТА' />
      )}
    </>
  );
};

export default SignIn;
