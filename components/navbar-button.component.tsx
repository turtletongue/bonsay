import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

interface NavbarButtonProps {
  open: boolean;
}

export const NavbarButton = ({ open }: NavbarButtonProps) => {
  return (
    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
      <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-20'>
        <span className='sr-only'>Открыть меню</span>
        {open ? (
          <XIcon className='block h-6 w-6' aria-hidden='true' />
        ) : (
          <MenuIcon className='block h-6 w-6' aria-hidden='true' />
        )}
      </Disclosure.Button>
    </div>
  );
};

export default NavbarButton;
