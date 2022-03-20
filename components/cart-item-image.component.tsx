import Image from 'next/image';

import { DEFAULT_PRODUCT_IMAGE } from '@app/variables';

import { Product } from '@app/declarations';

interface CartItemImageProps {
  product: Product;
}

export const CartItemImage = ({
  product: { name, path },
}: CartItemImageProps) => {
  return (
    <Image
      src={path ? path : DEFAULT_PRODUCT_IMAGE}
      width={110}
      height={140}
      alt={name}
      className="select-none"
    />
  );
};

export default CartItemImage;
