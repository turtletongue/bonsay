import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import ProfileNavigation from '@components/profile-navigation.component';
import Orders from '@containers/orders.container';
import {
  selectAccessToken,
  selectIsAuthenticated,
} from '@store/core/core.slice';
import {
  fetchProfileOrders,
  selectOrders,
} from '@store/profile-orders/profile-orders.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const ProfileOrders = () => {
  const { push } = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      push('/');
    }
  }, [push, isAuthenticated]);

  const dispatch = useAppDispatch();

  const accessToken = useAppSelector(selectAccessToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchProfileOrders({ page: 1, accessToken }));
    }
  }, [dispatch, accessToken]);

  const orders = useAppSelector(selectOrders);

  return (
    <>
      <Head>
        <title>Заказы | BONSAY</title>
      </Head>
      <div className="w-full p-4">
        <ProfileNavigation activePage="orders" />
        <Orders orders={orders} />
      </div>
    </>
  );
};

export default ProfileOrders;
