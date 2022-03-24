import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import OrderDataForm from '@containers/order-data-form.container';
import {
  removeDeletedProducts,
  selectProductsIds,
} from '@store/cart/cart.slice';
import { selectIsAuthenticated } from '@store/core/core.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const OrderPlacing = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, [setIsHydrated]);

  const { push } = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      push('/');
    }
  }, [push, isAuthenticated]);

  const dispatch = useAppDispatch();

  const productsIds = useAppSelector(selectProductsIds);

  useEffect(() => {
    dispatch(removeDeletedProducts(productsIds));
  }, [dispatch, productsIds]);

  return (
    <>
      <Head>
        <title>Оформление заказа | BONSAY</title>
      </Head>
      <div className="py-4 max-w-md mx-auto">
        {isHydrated && <OrderDataForm />}
      </div>
    </>
  );
};

export default OrderPlacing;
