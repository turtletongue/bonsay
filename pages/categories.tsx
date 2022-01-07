import Head from 'next/head';
import { Pool } from 'pg';

import CategoriesGrid from '../containers/categories-grid.container';

import { dbConnectionConfig } from '../db-connection.config';
import { categoriesPreview } from '../sql/categories-preview.sql';
import { ISR_DELAY_IN_SECONDS } from '../variables';

import { GetStaticProps } from 'next';
import { Category } from '../declarations';

export const Categories = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Категории | BONSAY</title>
      </Head>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8'>
        <CategoriesGrid categories={categories} />
      </div>
    </>
  );
};

export default Categories;

export const getStaticProps: GetStaticProps = async () => {
  const pool = new Pool(dbConnectionConfig);

  const categories: { rows: Category[] } = await pool.query(categoriesPreview);

  await pool.end();

  return {
    props: {
      categories: categories.rows.map(category => category.path ?
        { ...category, path: process.env.PRIVATE_API_PATH + category.path } :
        category
      )
    },
    revalidate: ISR_DELAY_IN_SECONDS
  };
};
