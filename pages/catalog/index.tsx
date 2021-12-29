import Head from 'next/head';

import CatalogScreen from '../../containers/catalog-screen.container';

import { GetServerSideProps } from 'next';
import { Product } from '../../declarations';

export const Catalog = ({ products, total }) => {
  return (
    <>
      <Head>
        <title>Каталог | BONSAY</title>
      </Head>
      <CatalogScreen products={products} total={total} />
    </>
  );
};

export default Catalog;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products: Product[] = [
    {
      id: 1,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 2,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 3,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 4,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 5,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 6,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 7,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 8,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    }
  ]; // server fetching

  const total = 51;

  return {
    props: {
      products,
      total
    }
  };
};
