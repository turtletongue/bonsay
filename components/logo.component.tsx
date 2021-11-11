import Link from 'next/link';

interface LogoProps {
  color?: 'text-primary' | 'text-white';
  onClick?: () => void;
}

export const Logo = ({ onClick, color = 'text-primary' }: LogoProps) => {
  return (
    <Link href='/'>
      <a
        onClick={onClick}
        className={`flex flex-col items-center ${color} font-hanuman cursor-pointer`}
      >
        <div className='text-3xl'>BONSAY</div>
        <div className='tracking-widest text-xs'>BEAUTY IN SMALL</div>
      </a>
    </Link>
  );
};

export default Logo;
