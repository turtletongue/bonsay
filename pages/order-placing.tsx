import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  removeDeletedProducts,
  selectProductsIds,
} from '../store/cart/cart.slice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectIsAuthenticated } from '../store/core/core.slice';
import OrderDataForm from '../containers/order-data-form.container';

export const OrderPlacing = () => {
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
        <OrderDataForm />
      </div>
    </>
  );
};

export default OrderPlacing;
