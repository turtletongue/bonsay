import ScreenHeading from '../components/screen-heading.component';
import CategoriesGrid from './categories-grid.container';

export const CategoriesScreen = () => {
  return (
    <div className='w-full bg-lightgray'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8'>
        <ScreenHeading href='/categories'>Категории</ScreenHeading>
        <CategoriesGrid />
      </div>
    </div>
  );
};

export default CategoriesScreen;
