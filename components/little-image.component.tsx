import Image from 'next/image';

import { Id } from '@app/declarations';

interface LittleImageProps {
  id?: Id;
  index: number;
  src: string;
  alt: string;
  onClick?: (index: number, ...args: unknown[]) => unknown;
}

export const LittleImage = ({
  src,
  alt,
  id,
  index,
  onClick,
}: LittleImageProps) => {
  return (
    <Image
      src={src}
      width={120}
      height={120}
      alt={alt}
      id={id?.toString()}
      onClick={(...args) => onClick(index, args)}
    />
  );
};

export default LittleImage;
