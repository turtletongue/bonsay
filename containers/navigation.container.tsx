import { useEffect, useState } from 'react';

import NavbarLink from '@components/navbar-link.component';
import {
  revokeToken,
  selectRefreshToken,
  signOut,
} from '@store/core/core.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

import { NavLink } from '@app/declarations';

interface NavigationProps {
  navigation: NavLink[];
  currentPathname: string;
}

export const Navigation = ({
  navigation,
  currentPathname,
}: NavigationProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, [setIsHydrated]);

  const dispatch = useAppDispatch();

  const refreshToken = useAppSelector(selectRefreshToken);

  const onSignOut = () => {
    dispatch(revokeToken({ refreshToken }));
    dispatch(signOut());
  };

  return (
    <div className="hidden sm:block sm:ml-6 z-30">
      <div className="flex space-x-8 font-nunito">
        {navigation.map((item) => (
          <NavbarLink
            key={item.name}
            href={item.href}
            isActive={item.href === currentPathname}
            onClick={item.isSignOut ? onSignOut : undefined}
          >
            {item.name}
            {isHydrated && item.extra}
          </NavbarLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
