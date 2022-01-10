export const similarProducts = {
  name: 'similarProducts',
  text: `
    SELECT product.id, product.name, product.price, upload.path
    FROM products product
    LEFT JOIN uploads upload
    ON product."uploadId" = upload.id
    WHERE product."categoryId" = $1 AND
          product.id != $2
    LIMIT 4
  `,
};
