export const newProducts = {
  name: 'newProducts',
  text: `
    SELECT product.id, product.name, product.price, upload."internalPath",
           product.height, (EXTRACT(year FROM AGE(product.birthdate))) AS age
    FROM products product
    LEFT JOIN uploads upload
    ON product."uploadId" = upload.id
    ORDER BY product."createdAt" DESC
    LIMIT 10
  `,
};
