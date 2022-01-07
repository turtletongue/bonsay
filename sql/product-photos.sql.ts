export const productPhotos = {
  name: 'productPhotos',
  text: `
    SELECT photo.id, upload.path
    FROM photos photo
    INNER JOIN uploads upload
    ON photo."uploadId" = upload.id
    WHERE photo."productId" = $1
  `,
};
