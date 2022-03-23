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
  lastItemClassNames?: string;
  preLastItemClassNames?: string;
}

export const ProductsGrid = ({
  products,
  className = '',
  isLoading = false,
  isFill = true,
  lastItemClassNames = '',
  preLastItemClassNames = '',
}: ProductsGridProps) => {
  const cartProductsIds = useAppSelector(selectProductsIds);

  return (
    <div
      className={`grid grid-flow-row justify-center ${className} ${
        isFill ? 'grid-cols-4-fill' : 'grid-cols-4'
      } gap-4 mx-4 sm:mx-0`}
    >
      {isLoading
        ? cardMocks
        : products.map((product, index) => {
            const className =
              index >= products.length - 1
                ? lastItemClassNames
                : index >= products.length - 2
                ? preLastItemClassNames
                : '';

            return (
              <div key={product.id} className={className}>
                <CardWithTransition
                  isLoading={isLoading}
                  isInCart={cartProductsIds.includes(product.id.toString())}
                  product={product}
                />
              </div>
            );
          })}
    </div>
  );
};

export default ProductsGrid;
