import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Pool } from 'pg';

import { ISR_DELAY_IN_SECONDS, mainScreenConfig } from '../variables';
import { dbConnectionConfig } from '../db-connection.config';
import { categoriesPreview } from '../sql/categories-preview.sql';
import { bestsellers } from '../sql/bestsellers.sql';
import MainScreen from '../containers/main-screen.container';
import Bestsellers from '../containers/bestsellers.container';
import CategoriesScreen from '../containers/categories-screen.container';

import { Category, Product } from '../declarations';

export default function Home({ bestsellers, categories }) {
  return (
    <>
      <Head>
        <title>Главная | BONSAY</title>
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

  const setPaths = (entity: Category | Product) => entity.path ? { ...entity,  path: process.env.PRIVATE_API_PATH + entity.path } : entity;

  return {
    props: {
      bestsellers: products.rows.map(setPaths),
      categories: categories.rows.map(setPaths)
    },
    revalidate: ISR_DELAY_IN_SECONDS
  };
};
