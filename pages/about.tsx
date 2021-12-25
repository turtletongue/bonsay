import Head from 'next/head';

import Contacts from '../containers/contacts.container';

export const About = () => {
  return (
    <>
      <Head>
        <title>О нас | BONSAY</title>
      </Head>
      <Contacts />
    </>
  );
};

export default About;
