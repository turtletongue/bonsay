import { Transition } from '@headlessui/react';

import { CardWithLink } from '@containers/card-with-link.container';

import { Product } from '@app/declarations';

interface CardWithTransitionProps {
  isLoading: boolean;
  isInCart: boolean;
  product: Product;
}

export const CardWithTransition = ({
  isLoading,
  isInCart,
  product,
}: CardWithTransitionProps) => {
  return (
    <Transition
      show={!isLoading}
      enter="transition-opacity duration-250"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-250"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <CardWithLink product={product} isInCart={isInCart} />
    </Transition>
  );
};

export default CardWithTransition;
