import Head from 'next/head';

import { pageDescriptions } from '../page-descriptions';
import Contacts from '../containers/contacts.container';

export const About = () => {
  return (
    <>
      <Head>
        <title>О нас | BONSAY</title>
        <meta name="description" content={pageDescriptions.about} />
      </Head>
      <Contacts />
    </>
  );
};

export default About;
