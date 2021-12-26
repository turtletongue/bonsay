import Head from 'next/head';

import SignInForm from '../containers/sign-in-form.container';

export const SignIn = () => {
  return (
    <>
      <Head>
        <title>Вход | BONSAY</title>
      </Head>
      <SignInForm />
    </>
  );
};

export default SignIn;
