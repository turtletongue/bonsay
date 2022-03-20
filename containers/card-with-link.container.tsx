import Link from 'next/link';

import Card from '@containers/card.container';
import { DEFAULT_PRODUCT_IMAGE } from '@app/variables';

import { Product } from '@app/declarations';

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
          imageUrl={product.path || DEFAULT_PRODUCT_IMAGE}
          isInCart={isInCart}
        />
      </a>
    </Link>
  );
};

export default CardWithLinkProps;
