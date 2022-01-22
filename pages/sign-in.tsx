import Head from 'next/head';

import { pageDescriptions } from '../page-descriptions';
import SignInForm from '../containers/sign-in-form.container';

export const SignIn = () => {
  return (
    <>
      <Head>
        <title>Вход | BONSAY</title>
        <meta name="description" content={pageDescriptions.signIn} />
      </Head>
      <SignInForm />
    </>
  );
};

export default SignIn;
