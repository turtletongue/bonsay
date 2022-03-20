import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Pool } from 'pg';

import MainScreen from '@containers/main-screen.container';
import Bestsellers from '@containers/bestsellers.container';
import CategoriesScreen from '@containers/categories-screen.container';
import { categoriesPreview } from '@sql/categories-preview.sql';
import { pageDescriptions } from '@app/page-descriptions';
import { bestsellers } from '@sql/bestsellers.sql';
import { dbConnectionConfig } from '@app/db-connection.config';
import { ISR_DELAY_IN_SECONDS, mainScreenConfig } from '@app/variables';

import { Category, Product } from '@app/declarations';

export default function Home({ bestsellers, categories }) {
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
      <Bestsellers bestsellers={bestsellers} />
      <CategoriesScreen categories={categories} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pool = new Pool(dbConnectionConfig);

  const products: { rows: Product[] } = await pool.query(bestsellers);

  const categories: { rows: Category[] } = await pool.query(categoriesPreview);

  await pool.end();

  const setPaths = (entity: Category | Product) =>
    entity.internalPath ? { ...entity, path: entity.internalPath } : entity;

  return {
    props: {
      bestsellers: products.rows.map(setPaths),
      categories: categories.rows.map(setPaths),
    },
    revalidate: ISR_DELAY_IN_SECONDS,
  };
};
