import CategoryPreview from '@containers/category-preview.container';

import { Category } from '@app/declarations';

interface CategoriesGridProps {
  categories: Category[];
}

export const CategoriesGrid = ({ categories }: CategoriesGridProps) => {
  return (
    <div className="grid grid-flow-row auto-cols-fr grid-cols-1 justify-center gap-6 sm:gap-12">
      {categories.map((category) => (
        <CategoryPreview key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesGrid;
