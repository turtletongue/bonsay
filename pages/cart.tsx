import Head from 'next/head';

import CartItems from '../containers/cart-items.container';
import CartTotal from '../containers/cart-total.container';

export const SignIn = () => {
  return (
    <>
      <Head>
        <title>Корзина | BONSAY</title>
      </Head>
      <div className='w-full relative'>
        <CartItems />
        <div className='hidden sm:block absolute right-12 top-12'>
          <CartTotal total={3000} />
        </div>
        <div className='flex justify-center mb-4 w-full  sm:hidden'>
          <CartTotal total={3000} />
        </div>
      </div>
    </>
  );
};

export default SignIn;
