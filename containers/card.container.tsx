import Image from 'next/image';

import { IMAGE_API_URL } from '../api';

import {
  DEFAULT_CARD_IMAGE_HEIGHT,
  DEFAULT_CARD_IMAGE_WIDTH,
} from '../variables';

interface CardProps {
  title: string;
  price: number;
  imageUrl: string;
  isInCart?: boolean;
  onClick?: () => void;
}

export const Card = ({
  title,
  price,
  imageUrl,
  isInCart,
  onClick,
}: CardProps) => {
  return (
    <div
      className={`group product-card bg-white max-h-96 max-w-xs flex flex-col overflow-hidden border-2 ${
        isInCart ? 'border-secondary' : 'border-decoration'
      } hover:border-secondary transition-colors text-center font-hanuman text-primary cursor-pointer`}
      onClick={onClick}
    >
      <div className="relative flex justify-center items-center">
        <div className="overflow-hidden">
          <Image
            src={IMAGE_API_URL + imageUrl}
            width={DEFAULT_CARD_IMAGE_WIDTH}
            height={DEFAULT_CARD_IMAGE_HEIGHT}
            alt={title}
          />
        </div>
      </div>
      <span className="tracking-wider text-xs my-2">{title}</span>
      <hr className="border rounded-sm border-decoration mx-2" />
      <span className="text-sm my-2">{Number(price).toFixed(2)} ₽</span>
    </div>
  );
};

export default Card;
