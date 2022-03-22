import Image from 'next/image';

import { Id } from '@app/declarations';

interface LittleImageProps {
  id?: Id;
  src: string;
  alt: string;
}

export const LittleImage = ({ src, alt, id }: LittleImageProps) => {
  return (
    <Image src={src} width={120} height={120} alt={alt} id={id.toString()} />
  );
};

export default LittleImage;
