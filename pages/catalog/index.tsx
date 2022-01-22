import Head from 'next/head';

import { pageDescriptions } from '../../page-descriptions';
import CatalogScreen from '../../containers/catalog-screen.container';

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
