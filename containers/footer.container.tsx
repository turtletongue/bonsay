import Link from 'next/link';
import Image from 'next/image';

import Logo from '../components/logo.component';
import Instagram from '../public/icons/instagram.svg';
import Facebook from '../public/icons/facebook.svg';
import Twitter from '../public/icons/twitter.svg';
import Vk from '../public/icons/vk.svg';

interface FooterProps {
  instagramUrl?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  vkUrl?: string;
}

const defaultUrls = {
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://facebook.com',
  twitterUrl: 'https://twitter.com',
  vkUrl: 'https://vk.com',
};

export const Footer = ({
  instagramUrl = defaultUrls.instagramUrl,
  facebookUrl = defaultUrls.facebookUrl,
  twitterUrl = defaultUrls.twitterUrl,
  vkUrl = defaultUrls.vkUrl,
}: FooterProps) => {
  return (
    <div className="w-full flex flex-col items-center bg-secondary p-8 mt-auto">
      <Logo color="text-white" />
      <div className="flex justify-between w-44 m-4">
        <Link href={instagramUrl}>
          <a>
            <Image src={Instagram} alt="Instagram" width={30} height={29} />
          </a>
        </Link>
        <Link href={facebookUrl}>
          <a>
            <Image src={Facebook} alt="Facebook" width={30} height={29} />
          </a>
        </Link>
        <Link href={twitterUrl}>
          <a>
            <Image src={Twitter} alt="Twitter" width={30} height={29} />
          </a>
        </Link>
        <Link href={vkUrl}>
          <a>
            <Image src={Vk} alt="Vk" width={30} height={29} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
