export const categories = {
  name: 'categories',
  text: `
    SELECT category.id, category.name,
          category.description, upload.path
    FROM categories category
    LEFT JOIN uploads upload
    ON category."uploadId" = upload.id
  `,
};
