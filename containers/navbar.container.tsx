import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';

import { useAppSelector } from '../hooks';
import { selectIsAuthenticated } from '../store/core/core.slice';
import { selectCartItemsCount } from '../store/cart/cart.slice';
import { anonymousNavigation, authenticatedNavigation } from '../variables';
import Navigation from './navigation.container';
import NavbarButton from '../components/navbar-button.component';
import NavbarMobilePanel from './navbar-mobile-panel.container';
import Logo from '../components/logo.component';
import DecorationLine from '../components/decoration-line.component';

export const Navbar = () => {
  const { pathname } = useRouter();

  const cartItemsCount = useAppSelector(selectCartItemsCount);

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const getNavigation = isAuthenticated
    ? authenticatedNavigation
    : anonymousNavigation;

  const navigation = getNavigation(cartItemsCount);

  return (
    <>
      <Disclosure as='nav' className='sticky sm:static top-0 z-10 bg-white'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
              <div className='relative flex items-center justify-between h-16 w-100 my-1'>
                <NavbarButton open={open} />
                <div className='flex items-center sm:justify-between w-full'>
                  <Navigation
                    navigation={navigation.leftNavigation}
                    currentPathname={pathname}
                  />
                  <div className='flex justify-center items-center w-full absolute inset-0'>
                    <Logo />
                  </div>
                  <Navigation
                    navigation={navigation.rightNavigation}
                    currentPathname={pathname}
                  />
                </div>
              </div>
            </div>

            <NavbarMobilePanel
              open={open}
              navigation={navigation}
              currentPathname={pathname}
            />

            <DecorationLine />
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
