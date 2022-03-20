import Image from 'next/image';

import {
  CATEGORY_IMAGE_HEIGHT,
  CATEGORY_IMAGE_WIDTH,
  DEFAULT_CATEGORY_IMAGE,
} from '@app/variables';

import { Category } from '@app/declarations';

interface CategoryPreviewImageProps {
  category: Category;
}

export const CategoryPreviewImage = ({
  category: { name, path, upload },
}: CategoryPreviewImageProps) => {
  return (
    <div>
      <Image
        src={path || upload?.path || DEFAULT_CATEGORY_IMAGE}
        alt={name}
        width={CATEGORY_IMAGE_WIDTH}
        height={CATEGORY_IMAGE_HEIGHT}
      />
    </div>
  );
};

export default CategoryPreviewImage;
