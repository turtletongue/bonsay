export const allProductsIds = {
  name: 'allProductsIds',
  text: `
    SELECT products.id
    FROM products product
    WHERE product."isAvailable" = TRUE AND
          product."isDeleted" = FALSE;
  `,
};
