import CategoryPreview from './category-preview.container';

export const CategoriesGrid = () => {
  return (
    <div className='grid grid-flow-row max-w-6xl auto-cols-fr grid-cols-1 justify-center gap-6 sm:gap-12'>
      <CategoryPreview />
      <hr className='block sm:hidden border rounded-sm border-gray' />
      <CategoryPreview />
    </div>
  );
};

export default CategoriesGrid;
