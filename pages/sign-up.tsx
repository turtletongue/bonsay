import Head from 'next/head';

import SignUpForm from '../containers/sign-up-form.container';

export const SignIn = () => {
  return (
    <>
      <Head>
        <title>Регистрация | BONSAY</title>
      </Head>
      <SignUpForm />
    </>
  );
};

export default SignIn;
