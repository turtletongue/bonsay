import CardWithTransition from '@containers/card-with-transition.container';
import { selectProductsIds } from '@store/cart/cart.slice';
import { useAppSelector } from '@app/hooks';
import { cardMocks } from '@app/variables';

import { Product } from '@app/declarations';

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
