import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import Button from '@components/button.component';

interface MainScreenProps {
  title: ReactElement;
  description: ReactElement;
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export const MainScreen = ({ title, description, image }: MainScreenProps) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-2 font-noto sm:px-6 lg:px-8 relative -top-0.5 mb-6 flex flex-col-reverse items-center sm:flex-row justify-between">
        <div className="flex flex-col justify-center max-w-md">
          <div className="text-primary text-2xl text-center sm:text-left">
            {title}
          </div>
          <p className="text-primary my-4 sm:pr-12 text-center sm:text-justify">
            {description}
          </p>
          <Link href="/catalog">
            <a>
              <Button className="sm:w-32 mt-6">В КАТАЛОГ</Button>
            </a>
          </Link>
        </div>
        <div className="ml-2">
          <Image
            src={image.url}
            alt="Beautiful bonsai"
            width={image.width}
            height={image.height}
            className="relative -top-0.5"
          />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
