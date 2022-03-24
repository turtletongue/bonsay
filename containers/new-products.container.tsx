import ScreenHeading from '@components/screen-heading.component';
import ProductsGrid from '@containers/products-grid.container';

import { Product } from '@app/declarations';

interface NewProductsProps {
  newProducts: Product[];
}

export const NewProducts = ({ newProducts }: NewProductsProps) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-2 lg:px-8 mb-8">
        <ScreenHeading href="/catalog">Новинки</ScreenHeading>
        <ProductsGrid
          products={newProducts}
          lastItemClassNames="block 3-cols:hidden 4-cols:hidden 5-cols:block"
          preLastItemClassNames="block 4-cols:hidden 5-cols:block"
        />
      </div>
    </div>
  );
};

export default NewProducts;
