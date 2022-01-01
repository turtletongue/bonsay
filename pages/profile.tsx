import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import ProfileScreen from '../containers/profile-screen.container';
import { useAppSelector } from '../hooks';
import { selectIsAuthenticated, selectUser } from '../store/core/core.slice';

export const Profile = () => {
  const { push } = useRouter();

  const user = useAppSelector(selectUser);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      push('/');
    }
  }, [push, isAuthenticated]);

  return (
    <>
      <Head>
        <title>Профиль | BONSAY</title>
      </Head>
      <ProfileScreen user={user} />
    </>
  );
};

export default Profile;
