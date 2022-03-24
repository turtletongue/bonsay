import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import ProfileNavigation from '@components/profile-navigation.component';
import Settings from '@containers/settings.container';
import { selectIsAuthenticated, selectUser } from '@store/core/core.slice';
import { useAppSelector } from '@app/hooks';

export const ProfileSettings = () => {
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
        <title>Настройки | BONSAY</title>
      </Head>
      <div className="w-full h-[35rem] p-4">
        <ProfileNavigation activePage="settings" />
        <div className="w-full h-full flex justify-center items-center">
          <Settings user={user} />
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
