import CardWithTransition from '@containers/card-with-transition.container';
import { selectProductsIds } from '@store/cart/cart.slice';
import { useAppSelector } from '@app/hooks';
import { cardMocks } from '@app/variables';

import { Product } from '@app/declarations';

interface ProductsGridProps {
  products: Product[];
  className?: string;
  isLoading?: boolean;
  isFill?: boolean;
}

export const ProductsGrid = ({
  products,
  className = '',
  isLoading = false,
  isFill = true,
}: ProductsGridProps) => {
  const cartProductsIds = useAppSelector(selectProductsIds);

  return (
    <div
      className={`grid grid-flow-row ${className} ${
        isFill ? 'grid-cols-4-fill' : 'grid-cols-4'
      } gap-4`}
    >
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
