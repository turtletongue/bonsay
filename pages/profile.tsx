import Head from 'next/head';

import ProfileScreen from '../containers/profile-screen.container';

export const Profile = () => {
  return (
    <>
      <Head>
        <title>Профиль | BONSAY</title>
      </Head>
      <ProfileScreen />
    </>
  );
};

export default Profile;
