import ScreenHeading from '@components/screen-heading.component';
import CategoriesGrid from '@containers/categories-grid.container';

import { Category } from '@app/declarations';

interface CategoriesScreenProps {
  categories: Category[];
}

export const CategoriesScreen = ({ categories }: CategoriesScreenProps) => {
  return (
    <div className="w-full bg-lightgray">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
        <ScreenHeading href="/categories">Категории</ScreenHeading>
        <CategoriesGrid categories={categories} />
      </div>
    </div>
  );
};

export default CategoriesScreen;
