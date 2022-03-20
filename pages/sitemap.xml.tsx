import { GetServerSideProps } from 'next';
import { Pool } from 'pg';

import { allProductsIds } from '@sql/all-products-ids.sql';
import { FRONT_URL } from '@app/api';
import { dbConnectionConfig } from '@app/db-connection.config';

import { Product } from '@app/declarations';

const generateSiteMap = (products: Partial<Product>[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${FRONT_URL}</loc>
     </url>
     <url>
       <loc>${FRONT_URL}catalog</loc>
     </url>
     <url>
       <loc>${FRONT_URL}categories</loc>
     </url>
     <url>
       <loc>${FRONT_URL}about</loc>
     </url>
     <url>
       <loc>${FRONT_URL}cart</loc>
     </url>
     <url>
       <loc>${FRONT_URL}sign-in</loc>
     </url>
     <url>
       <loc>${FRONT_URL}sign-up</loc>
     </url>
     ${products
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${FRONT_URL}catalog/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
};

export const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const pool = new Pool(dbConnectionConfig);

  const products: { rows: Partial<Product>[] } = await pool.query(
    allProductsIds
  );

  await pool.end();

  const sitemap = generateSiteMap(products.rows);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
