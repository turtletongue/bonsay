import Head from 'next/head';

import Contacts from '@containers/contacts.container';
import { pageDescriptions } from '@app/page-descriptions';

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
