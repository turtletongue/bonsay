import CategoryPreviewImage from '@components/category-preview-image.component';
import CategoryPreviewSearchButton from '@components/category-preview-search-button.component';

import { Category } from '@app/declarations';

interface CategoryPreviewProps {
  category: Category;
}

const CategoryPreview = ({ category }: CategoryPreviewProps) => {
  const { id, name, description } = category;

  return (
    <div className="grid grid-cols-2 gap-6 sm:gap-12 justify-center">
      <CategoryPreviewImage category={category} />
      <div className="flex flex-col justify-between">
        <div>
          <div className="text-primary text-2xl mb-4">{name}</div>
          <p className="text-primary text-justify">{description}</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <CategoryPreviewSearchButton id={id} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
