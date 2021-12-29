import { Fragment } from 'react';

import CategoryPreview from './category-preview.container';

import { Category } from '../declarations';

interface CategoriesGridProps {
  categories: Category[];
}

export const CategoriesGrid = ({ categories }: CategoriesGridProps) => {
  return (
    <div className='grid grid-flow-row max-w-6xl auto-cols-fr grid-cols-1 justify-center mx-auto gap-6 sm:gap-12'>
      {categories.map((category, index) => {
        return (
          <Fragment key={category.id}>
            <CategoryPreview category={category} />
            {index !== categories.length - 1 && (
              <hr className='block sm:hidden border rounded-sm border-gray' />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default CategoriesGrid;
