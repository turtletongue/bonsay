import Head from 'next/head';

import SignInForm from '@containers/sign-in-form.container';
import { pageDescriptions } from '@app/page-descriptions';

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
