import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Pool } from 'pg';

import MainScreen from '@containers/main-screen.container';
import NewProducts from '@containers/new-products.container';
import CategoriesScreen from '@containers/categories-screen.container';
import { categoriesPreview } from '@sql/categories-preview.sql';
import { pageDescriptions } from '@app/page-descriptions';
import { newProducts } from '@sql/new-products.sql';
import { dbConnectionConfig } from '@app/db-connection.config';
import { ISR_DELAY_IN_SECONDS, mainScreenConfig } from '@app/variables';

import { Category, Product } from '@app/declarations';

export default function Home({ newProducts, categories }) {
  return (
    <>
      <Head>
        <title>Главная | BONSAY</title>
        <meta name="description" content={pageDescriptions.index} />
      </Head>
      <MainScreen
        title={mainScreenConfig.title}
        description={mainScreenConfig.description}
        image={mainScreenConfig.image}
      />
      <NewProducts newProducts={newProducts} />
      <CategoriesScreen categories={categories} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pool = new Pool(dbConnectionConfig);

  const products: { rows: Product[] } = await pool.query(newProducts);

  const categories: { rows: Category[] } = await pool.query(categoriesPreview);

  await pool.end();

  const setPaths = (entity: Category | Product) =>
    entity.internalPath ? { ...entity, path: entity.internalPath } : entity;

  return {
    props: {
      newProducts: products.rows.map(setPaths),
      categories: categories.rows.map(setPaths),
    },
    revalidate: ISR_DELAY_IN_SECONDS,
  };
};
