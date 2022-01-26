export const bestsellers = {
  name: 'bestsellers',
  text: `
    SELECT product.id, product.name, product.price,
           product.height, (EXTRACT(year FROM AGE(product.birthdate))) AS age, upload.path,
           COALESCE((
             SELECT SUM(qty)
             FROM purchases purchase
             WHERE purchase."productId" = product.id
           ), 0) AS sales
    FROM products product
    LEFT JOIN uploads upload
    ON product."uploadId" = upload.id
    GROUP BY product.id, upload.path
    ORDER BY sales DESC
    LIMIT 8
  `,
};
