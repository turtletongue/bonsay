import Head from 'next/head';

import CategoriesGrid from '../containers/categories-grid.container';

export const Categories = () => {
  return (
    <>
      <Head>
        <title>Категории | BONSAY</title>
      </Head>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8'>
        <CategoriesGrid />
      </div>
    </>
  );
};

export default Categories;
