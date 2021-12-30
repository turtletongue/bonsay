import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { ISR_DELAY_IN_SECONDS } from '../../variables';
import ProductInfo from '../../containers/product-info.container';
import ProductsGrid from '../../containers/products-grid.container';

import { Product } from '../../declarations';

export const ProductPage = ({ product }) => {
  return (
    <>
      <Head>
        <title>Товар | BONSAY</title>
      </Head>
      <ProductInfo product={product} />
      <div className='w-full my-2 text-center font-medium text-primary'>
        ПОХОЖИЕ ТОВАРЫ
      </div>
      <div className='my-6 flex justify-center w-full'>
        <ProductsGrid products={product.similarProducts} />
      </div>
    </>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const productsIds = [{ id: '1' }, { id: '2' }, { id: '3' }]; // server fetching

  return {
    paths: productsIds.map((productId) => ({ params: productId })),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product: Product = {
    id: params.id.toString(),
    name: 'MONDAY PINE',
    price: 750,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugiat quos eligendi amet magnam! Vitae dolore totam optio fuga aspernatur nostrum cumque quas nobis odit, obcaecati, expedita ipsam reprehenderit natus repudiandae eius error neque vero placeat. Velit, sequi nam! Dolorem blanditiis soluta, facere repudiandae, dolore ea deserunt obcaecati provident aspernatur, adipisci saepe cupiditate pariatur voluptas illum sint labore? Explicabo quisquam dolore, ad eveniet, culpa atque animi praesentium nemo facere minus dolorum mollitia doloribus tempore necessitatibus eos veritatis saepe architecto esse quod natus magnam, dignissimos dolores. Blanditiis, delectus dolorem perferendis tenetur voluptate nam ex eveniet mollitia quas voluptates, ducimus ad nesciunt.',
    createdAt: '2020-12-20',
    updatedAt: '2020-12-20',
    age: 30,
    height: 34,
    upload: { id: 5, path: '/images/product.jpg' },
    photos: [
      { id: 1, path: '/images/pines.jpg' },
      { id: 2, path: '/images/product.jpg' },
      { id: 3, path: '/images/product.jpg' },
      { id: 4, path: '/images/product.jpg' }
    ],
    similarProducts: [
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
      }
    ]
  }; // server fetching

  return {
    props: {
      product
    },
    revalidate: ISR_DELAY_IN_SECONDS
  };
};
