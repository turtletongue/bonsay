import Link from 'next/link';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';

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
  isLoading = false,
}: ProductsGridProps) => {
  const { push } = useRouter();

  const cartProductsIds = useAppSelector(selectProductsIds);

  return (
    <div className="grid grid-flow-row max-w-6xl auto-cols-fr grid-cols-4 justify-center gap-6">
      {isLoading
        ? cardMocks
        : products.map((product) => {
            return (
              <Transition
                show={!isLoading}
                enter="transition-opacity duration-250"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-250"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                key={product.id}
              >
                <Link href={`/catalog/${product.id}`}>
                  <a>
                    <Card
                      title={product.name}
                      price={product.price}
                      imageUrl={
                        product.path ||
                        product.upload?.path ||
                        DEFAULT_PRODUCT_IMAGE
                      }
                      isInCart={cartProductsIds.includes(product.id.toString())}
                    />
                  </a>
                </Link>
              </Transition>
            );
          })}
    </div>
  );
};

export default ProductsGrid;
