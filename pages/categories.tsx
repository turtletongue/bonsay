import Head from 'next/head';
import { Pool } from 'pg';

import CategoriesGrid from '@containers/categories-grid.container';
import { categories as categoriesQuery } from '@sql/categories.sql';
import { dbConnectionConfig } from '@app/db-connection.config';
import { pageDescriptions } from '@app/page-descriptions';
import { ISR_DELAY_IN_SECONDS } from '@app/variables';

import { GetStaticProps } from 'next';
import { Category } from '@app/declarations';

export const Categories = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Категории | BONSAY</title>
        <meta name="description" content={pageDescriptions.categories} />
      </Head>
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
          <CategoriesGrid categories={categories} />
        </div>
      </div>
    </>
  );
};

export default Categories;

export const getStaticProps: GetStaticProps = async () => {
  const pool = new Pool(dbConnectionConfig);

  const categories: { rows: Category[] } = await pool.query(categoriesQuery);

  await pool.end();

  return {
    props: {
      categories: categories.rows.map((category) =>
        category.internalPath
          ? { ...category, path: category.internalPath }
          : category
      ),
    },
    revalidate: ISR_DELAY_IN_SECONDS,
  };
};
