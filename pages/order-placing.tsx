import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useAppSelector } from '../hooks';
import { selectIsAuthenticated } from '../store/core/core.slice';
import OrderDataForm from '../containers/order-data-form.containet';

export const OrderPlacing = () => {
  const { push } = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      push('/');
    }
  }, [push, isAuthenticated]);

  return (
    <>
      <Head>
        <title>Оформление заказа | BONSAY</title>
      </Head>
      <div className='py-4 max-w-md mx-auto'>
        <OrderDataForm />
      </div>
    </>
  );
};

export default OrderPlacing;
