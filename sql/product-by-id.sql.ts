export const productById = {
  name: 'productById',
  text: `
    SELECT product.id, product.name, product.price, product."categoryId",
           product.description, upload."internalPath", upload.path,
           product.height, (EXTRACT(year FROM AGE(product.birthdate))) AS age
    FROM products product
    LEFT JOIN uploads upload
    ON product."uploadId" = upload.id
    WHERE product.id = $1 AND
          product."isAvailable" = TRUE AND
          product."isDeleted" = FALSE
    GROUP BY product.id, upload."internalPath", upload.path
  `,
};
