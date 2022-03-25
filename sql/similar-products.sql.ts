export const similarProducts = {
  name: 'similarProducts',
  text: `
    SELECT product.id, product.name, product.price, upload."internalPath"
    FROM products product
    LEFT JOIN uploads upload
    ON product."uploadId" = upload.id
    WHERE product."categoryId" = $1 AND
          product.id != $2 AND
          product."isAvailable" = TRUE AND
          product."isDeleted" = FALSE
    LIMIT 4
  `,
};
