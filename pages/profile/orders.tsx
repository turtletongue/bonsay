import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FadeLoader } from 'react-spinners';

import ProfileNavigation from '@components/profile-navigation.component';
import Pagination from '@components/pagination.component';
import Orders from '@containers/orders.container';
import Void from '@containers/void.container';
import {
  selectAccessToken,
  selectIsAuthenticated,
} from '@store/core/core.slice';
import {
  fetchProfileOrders,
  selectIsLoading,
  selectOrders,
  selectPage,
  selectTotal,
  setPage,
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
  const pageNumber = useAppSelector(selectPage);

  useEffect(() => {
    dispatch(setPage(1));
  }, [dispatch]);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchProfileOrders({ page: pageNumber, accessToken }));
    }
  }, [dispatch, pageNumber, accessToken]);

  const total = useAppSelector(selectTotal);
  const orders = useAppSelector(selectOrders);
  const isLoading = useAppSelector(selectIsLoading);

  const onPageChange = (page: number) => {
    return () => {
      dispatch(setPage(page));
    };
  };

  return (
    <>
      <Head>
        <title>Заказы | BONSAY</title>
      </Head>
      <div className="w-full">
        {orders.length !== 0 || isLoading ? (
          <div className="p-4">
            <ProfileNavigation activePage="orders" />
            {isLoading ? (
              <Void className="h-96" text={<FadeLoader color="#627A52" />} />
            ) : (
              <Orders orders={orders} />
            )}
            <div className="w-full flex justify-center">
              <Pagination
                pageNumber={pageNumber}
                total={total}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        ) : (
          <Void text="ЗАКАЗЫ НЕ НАЙДЕНЫ" />
        )}
      </div>
    </>
  );
};

export default ProfileOrders;
