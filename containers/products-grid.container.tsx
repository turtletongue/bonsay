import CardWithTransition from './card-with-transition.container';
import { selectProductsIds } from '../store/cart/cart.slice';
import { useAppSelector } from '../hooks';
import { cardMocks } from '../variables';

import { Product } from '../declarations';

interface ProductsGridProps {
  products: Product[];
  isLoading?: boolean;
}

export const ProductsGrid = ({
  products,
  isLoading = false,
}: ProductsGridProps) => {
  const cartProductsIds = useAppSelector(selectProductsIds);

  return (
    <div className="grid grid-flow-row max-w-6xl auto-cols-fr grid-cols-4 justify-center gap-6">
      {isLoading
        ? cardMocks
        : products.map((product) => (
            <CardWithTransition
              key={product.id}
              isLoading={isLoading}
              isInCart={cartProductsIds.includes(product.id.toString())}
              product={product}
            />
          ))}
    </div>
  );
};

export default ProductsGrid;
