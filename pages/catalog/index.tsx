import Head from 'next/head';

import CatalogScreen from '@containers/catalog-screen.container';
import { pageDescriptions } from '@app/page-descriptions';

export const Catalog = () => {
  return (
    <>
      <Head>
        <title>Каталог | BONSAY</title>
        <meta name="description" content={pageDescriptions.catalog} />
      </Head>
      <CatalogScreen />
    </>
  );
};

export default Catalog;
