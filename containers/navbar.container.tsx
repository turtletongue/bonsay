import { useRouter } from 'next/router';
import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { useAppSelector } from '../hooks';
import { selectIsAuthenticated } from '../store/core/core.slice';
import { anonymousNavigation, authenticatedNavigation } from '../variables';
import NavbarLink from '../components/navbar-link.component';
import Logo from '../components/logo.component';

export const Navbar = () => {
  const { pathname } = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const navigation = isAuthenticated
    ? authenticatedNavigation
    : anonymousNavigation;

  return (
    <>
      <Disclosure as='nav' className='sticky sm:static top-0 z-10 bg-white'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
              <div className='relative flex items-center justify-between h-16 w-100 my-1'>
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
                <div className='flex-1 flex items-center sm:justify-between w-full'>
                  <div className='hidden sm:block sm:ml-6 z-20'>
                    <div className='flex space-x-8 font-nunito'>
                      {navigation.leftNavigation.map((item) => (
                        <NavbarLink
                          key={item.name}
                          href={item.href}
                          isActive={item.href === pathname}
                        >
                          {item.name}
                          {item.extra}
                        </NavbarLink>
                      ))}
                    </div>
                  </div>
                  <div className='flex justify-center items-center w-full absolute inset-0'>
                    <Logo />
                  </div>
                  <div className='hidden sm:block sm:ml-6 z-20'>
                    <div className='flex space-x-8 font-nunito'>
                      {navigation.rightNavigation.map((item) => (
                        <NavbarLink
                          key={item.name}
                          href={item.href}
                          isActive={item.href === pathname}
                        >
                          {item.name}
                          {item.extra}
                        </NavbarLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              enter='transition ease duration-400 transform'
              enterFrom='opacity-0 -translate-y-full'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease duration-400 transform'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 -translate-y-full'
            >
              <Disclosure.Panel className='sm:hidden z-20'>
                <div className='px-2 pt-2 pb-3 space-y-1 w-full flex flex-col bg-white absolute'>
                  {Object.values(navigation)
                    .flat(1)
                    .map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={NavbarLink}
                        href={item.href}
                        isActive={item.href === pathname}
                      >
                        {item.name}
                        {item.extra}
                      </Disclosure.Button>
                    ))}
                </div>
              </Disclosure.Panel>
            </Transition>
            <hr className='border rounded-sm border-decoration' />
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
