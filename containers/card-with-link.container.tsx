import Link from 'next/link';

import Card from './card.container';
import { DEFAULT_PRODUCT_IMAGE } from '../variables';

import { Product } from '../declarations';

interface CardWithLinkProps {
  product: Product;
  isInCart: boolean;
}

export const CardWithLink = ({ product, isInCart }: CardWithLinkProps) => {
  return (
    <Link href={`/catalog/${product.id}`}>
      <a>
        <Card
          title={product.name}
          price={product.price}
          imageUrl={
            product.path || product.upload?.path || DEFAULT_PRODUCT_IMAGE
          }
          isInCart={isInCart}
        />
      </a>
    </Link>
  );
};

export default CardWithLinkProps;
