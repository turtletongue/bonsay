export const categoriesPreview = {
  name: 'categoriesPreview',
  text: `
    SELECT category.id, category.name,
          category.description, upload."internalPath"
    FROM categories category
    LEFT JOIN uploads upload
    ON category."uploadId" = upload.id
    WHERE category."isDeleted" = FALSE
    LIMIT 2
  `,
};
