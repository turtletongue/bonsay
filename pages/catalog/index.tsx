import Head from 'next/head';

import CatalogScreen from '../../containers/catalog-screen.container';

export const Catalog = () => {
  return (
    <>
      <Head>
        <title>Каталог | BONSAY</title>
      </Head>
      <CatalogScreen />
    </>
  );
};

export default Catalog;
