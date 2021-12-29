import Image from 'next/image';

import {
  CATEGORY_IMAGE_HEIGHT,
  CATEGORY_IMAGE_WIDTH,
  DEFAULT_CATEGORY_IMAGE
} from '../variables';
import UnderlineLink from '../components/underline-link.component';

import { Category } from '../declarations';

interface CategoryPreviewProps {
  category: Category;
}

const CategoryPreview = ({
  category: { id, name, upload, description }
}: CategoryPreviewProps) => {
  return (
    <div className='grid grid-cols-2 gap-6 sm:gap-12 justify-center'>
      <div>
        <Image
          src={upload?.path || DEFAULT_CATEGORY_IMAGE}
          alt={name}
          width={CATEGORY_IMAGE_WIDTH}
          height={CATEGORY_IMAGE_HEIGHT}
        />
      </div>
      <div className='flex flex-col justify-between'>
        <div>
          <div className='text-primary text-2xl mb-4'>{name}</div>
          <p className='text-primary text-justify'>{description}</p>
        </div>
        <div className='mt-4 sm:mt-0'>
          <UnderlineLink href={`/catalog?category=${id}`}>
            Найти в каталоге
          </UnderlineLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
