import { GetStaticPaths, GetStaticProps } from 'next';
import { FadeLoader } from 'react-spinners';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Pool } from 'pg';

import ProductInfo from '@containers/product-info.container';
import ProductsGrid from '@containers/products-grid.container';
import Void from '@containers/void.container';
import { newProducts } from '@sql/new-products.sql';
import { productById } from '@sql/product-by-id.sql';
import { productPhotos } from '@sql/product-photos.sql';
import { similarProducts } from '@sql/similar-products.sql';
import { FRONT_URL } from '@app/api';
import { dbConnectionConfig } from '@app/db-connection.config';
import { DEFAULT_PRODUCT_IMAGE, ISR_DELAY_IN_SECONDS } from '@app/variables';

import { Product, Upload } from '@app/declarations';

export const ProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Товар | BONSAY</title>
        </Head>
        <Void text={<FadeLoader color="#627A52" />} />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} | BONSAY</title>
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="BONSAY" />
        <meta name="description" content={product.description} />
        <meta property="og:url" content={FRONT_URL + `catalog/${product.id}`} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta
          property="og:image"
          content={
            product.path ? product.path : FRONT_URL + DEFAULT_PRODUCT_IMAGE
          }
        />
      </Head>
      <ProductInfo product={product} />
      {product.similarProducts.length > 0 && (
        <>
          <div className="w-full my-2 text-center font-medium text-primary">
            ПОХОЖИЕ ТОВАРЫ
          </div>
          <div className="my-6 flex justify-center w-full">
            <ProductsGrid
              products={product.similarProducts}
              className="max-w-5xl"
              lastItemClassNames="block 3-cols:hidden 4-cols:block"
            />
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const pool = new Pool(dbConnectionConfig);

  const products: { rows: Product[] } = await pool.query(newProducts);

  await pool.end();

  return {
    paths: products.rows.map((product) => ({
      params: { id: String(product.id) },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pool = new Pool(dbConnectionConfig);

  const product: Product = (await pool.query(productById, [params.id])).rows[0];

  if (!product) {
    return {
      notFound: true,
    };
  }

  const photos: Upload[] = (await pool.query(productPhotos, [product.id])).rows;

  const similar: Product[] = (
    await pool.query(similarProducts, [product.categoryId, product.id])
  ).rows;

  await pool.end();

  return {
    props: {
      product: {
        ...product,
        path: product.internalPath,
        photos,
        similarProducts: similar.map((product) => ({
          ...product,
          path: product.internalPath,
        })),
      },
    },
    revalidate: ISR_DELAY_IN_SECONDS,
  };
};
