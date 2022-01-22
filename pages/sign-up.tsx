import Head from 'next/head';

import { pageDescriptions } from '../page-descriptions';
import SignUpForm from '../containers/sign-up-form.container';

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
