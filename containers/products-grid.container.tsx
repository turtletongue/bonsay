import { useRouter } from 'next/router';

import { useAppSelector } from '../hooks';
import { selectProductsIds } from '../store/cart/cart.slice';
import { cardMocks, DEFAULT_PRODUCT_IMAGE } from '../variables';
import Card from './card.container';

import { Product } from '../declarations';

interface ProductsGridProps {
  products: Product[];
  isLoading?: boolean;
}

export const ProductsGrid = ({
  products,
  isLoading = false
}: ProductsGridProps) => {
  const { push } = useRouter();

  const cartProductsIds = useAppSelector(selectProductsIds);

  return (
    <div className='grid grid-flow-row max-w-6xl auto-cols-fr grid-cols-4 justify-center gap-6'>
      {isLoading
        ? cardMocks
        : products.map((product) => {
            return (
              <Card
                key={product.id}
                title={product.name}
                price={product.price}
                imageUrl={product.path || product.upload?.path || DEFAULT_PRODUCT_IMAGE}
                isInCart={cartProductsIds.includes(product.id.toString())}
                onClick={() => push(`/catalog/${product.id}`)}
              />
            );
          })}
    </div>
  );
};

export default ProductsGrid;
