import { useRouter } from 'next/router';

import { Product } from '../store/products/products.declarations';
import { DEFAULT_PRODUCT_IMAGE } from '../variables';

import Card from './card.container';

interface ProductsGridProps {
  products: Product[];
}

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  const { push } = useRouter();

  return (
    <div className='grid grid-flow-row max-w-6xl auto-cols-fr grid-cols-4 justify-center gap-6'>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            title={product.name}
            price={product.price}
            imageUrl={product.upload.path || DEFAULT_PRODUCT_IMAGE}
            onClick={() => push(`/catalog/${product.id}`)}
          />
        );
      })}
    </div>
  );
};

export default ProductsGrid;
