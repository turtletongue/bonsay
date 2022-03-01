import { Disclosure, Transition } from '@headlessui/react';

import NavbarLink from '../components/navbar-link.component';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  revokeToken,
  selectRefreshToken,
  signOut,
} from '../store/core/core.slice';

import { Navigation } from '../declarations';

interface NavbarMobilePanelProps {
  open: boolean;
  currentPathname: string;
  navigation: Navigation;
}

export const NavbarMobilePanel = ({
  open,
  currentPathname,
  navigation,
}: NavbarMobilePanelProps) => {
  const dispatch = useAppDispatch();

  const refreshToken = useAppSelector(selectRefreshToken);

  const onSignOut = () => {
    dispatch(revokeToken({ refreshToken }));
    dispatch(signOut());
  };

  return (
    <Transition
      show={open}
      enter="transition ease duration-400 transform"
      enterFrom="opacity-0 -translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease duration-400 transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-full"
    >
      <Disclosure.Panel className="sm:hidden z-20">
        <div className="px-2 pt-2 pb-3 space-y-1 w-full flex flex-col bg-verylightgray absolute">
          {Object.values(navigation)
            .flat(1)
            .map((item) => (
              <Disclosure.Button
                key={item.name}
                as={NavbarLink}
                href={item.href}
                isActive={item.href === currentPathname}
                onClick={item.isSignOut ? onSignOut : undefined}
              >
                {item.name}
                {item.extra}
              </Disclosure.Button>
            ))}
        </div>
      </Disclosure.Panel>
    </Transition>
  );
};

export default NavbarMobilePanel;
