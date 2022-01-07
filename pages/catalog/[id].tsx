import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Pool } from 'pg';

import { ISR_DELAY_IN_SECONDS } from '../../variables';
import { bestsellers } from '../../sql/bestsellers.sql';
import { productById } from '../../sql/product-by-id.sql';
import { dbConnectionConfig } from '../../db-connection.config';
import ProductInfo from '../../containers/product-info.container';
import ProductsGrid from '../../containers/products-grid.container';

import { Product, Upload } from '../../declarations';
import { productPhotos } from '../../sql/product-photos.sql';
import { similarProducts } from '../../sql/similar-products.sql';
import { IMAGE_API_URL } from '../../api';

export const ProductPage = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.name} | BONSAY</title>
      </Head>
      <ProductInfo product={product} />
      <div className="w-full my-2 text-center font-medium text-primary">
        ПОХОЖИЕ ТОВАРЫ
      </div>
      <div className="my-6 flex justify-center w-full">
        <ProductsGrid products={product.similarProducts} />
      </div>
    </>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const pool = new Pool(dbConnectionConfig);

  const products: { rows: Product[] } = await pool.query(bestsellers);

  await pool.end();

  return {
    paths: products.rows.map((product) => ({
      params: { id: String(product.id) },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pool = new Pool(dbConnectionConfig);

  const product: Product = (await pool.query(productById, [params.id])).rows[0];

  const photos: Upload[] = (await pool.query(productPhotos, [product.id])).rows;

  const similar: Product[] = (
    await pool.query(similarProducts, [product.categoryId, product.id])
  ).rows;

  await pool.end();

  return {
    props: {
      product: {
        ...product,
        photos,
        similarProducts: similar.map((product) =>
          product.path
            ? { ...product, path: IMAGE_API_URL + product.path }
            : product
        ),
      },
    },
    revalidate: ISR_DELAY_IN_SECONDS,
  };
};
