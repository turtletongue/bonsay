import ScreenHeading from '@components/screen-heading.component';
import ProductsGrid from '@containers/products-grid.container';

import { Product } from '@app/declarations';

interface BestsellersProps {
  bestsellers: Product[];
}

export const Bestsellers = ({ bestsellers }: BestsellersProps) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-2 lg:px-8 mb-8">
        <ScreenHeading href="/catalog">Популярное</ScreenHeading>
        <ProductsGrid products={bestsellers} />
      </div>
    </div>
  );
};

export default Bestsellers;
