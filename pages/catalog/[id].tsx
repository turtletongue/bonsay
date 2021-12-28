import Head from 'next/head';

import ProductInfo from '../../containers/product-info.container';
import ProductsGrid from '../../containers/products-grid.container';

const products = [
  {
    id: 1,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 2,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 3,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 4,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  }
];

export const ProductPage = () => {
  const isInCart = true;

  return (
    <>
      <Head>
        <title>Товар | BONSAY</title>
      </Head>
      <ProductInfo isInCart={isInCart} />
      <div className='w-full my-2 text-center font-medium text-primary'>
        ПОХОЖИЕ ТОВАРЫ
      </div>
      <div className='my-6 flex justify-center w-full'>
        <ProductsGrid products={products} />
      </div>
    </>
  );
};

export default ProductPage;
