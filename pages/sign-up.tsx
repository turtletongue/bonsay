import Head from 'next/head';

import SignUpForm from '@containers/sign-up-form.container';
import { pageDescriptions } from '@app/page-descriptions';

export const SignIn = () => {
  return (
    <>
      <Head>
        <title>Регистрация | BONSAY</title>
        <meta name="description" content={pageDescriptions.signUp} />
      </Head>
      <SignUpForm />
    </>
  );
};

export default SignIn;
