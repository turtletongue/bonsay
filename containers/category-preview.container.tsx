import Image from 'next/image';

import { useAppDispatch } from '../hooks';
import {
  CATEGORY_IMAGE_HEIGHT,
  CATEGORY_IMAGE_WIDTH,
  DEFAULT_CATEGORY_IMAGE,
} from '../variables';
import UnderlineLink from '../components/underline-link.component';

import { Category } from '../declarations';
import { sortByOneCategory } from '../store/products/products.slice';

interface CategoryPreviewProps {
  category: Category;
}

const CategoryPreview = ({
  category: { id, name, path, upload, description },
}: CategoryPreviewProps) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(sortByOneCategory(String(id)));
  };

  return (
    <div className="grid grid-cols-2 gap-6 sm:gap-12 justify-center">
      <div>
        <Image
          src={path || upload?.path || DEFAULT_CATEGORY_IMAGE}
          alt={name}
          width={CATEGORY_IMAGE_WIDTH}
          height={CATEGORY_IMAGE_HEIGHT}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="text-primary text-2xl mb-4">{name}</div>
          <p className="text-primary text-justify">{description}</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div onClick={onClick}>
            <UnderlineLink href="/catalog">Найти в каталоге</UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
