import ScreenHeading from '../components/screen-heading.component';
import ProductsGrid from './products-grid.container';

import { Product } from '../declarations';

interface BestsellersProps {
  bestsellers: Product[];
}

export const Bestsellers = ({ bestsellers }: BestsellersProps) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-8">
      <ScreenHeading href="/catalog">Популярное</ScreenHeading>
      <ProductsGrid products={bestsellers} />
    </div>
  );
};

export default Bestsellers;
