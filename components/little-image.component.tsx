import Image from 'next/image';

import { Id } from '../declarations';

interface LittleImageProps {
  id?: Id;
  src: string;
  alt: string;
}

export const LittleImage = ({ src, alt, id }: LittleImageProps) => {
  return (
    <div className='flex items-center cursor-pointer mx-1'>
      <Image src={src} width={120} height={120} alt={alt} id={id.toString()} />
    </div>
  );
};

export default LittleImage;
