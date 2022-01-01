import NavbarLink from '../components/navbar-link.component';

import { useAppDispatch } from '../hooks';
import { signOut } from '../store/core/core.slice';
import { NavLink } from '../declarations';

interface NavigationProps {
  navigation: NavLink[];
  currentPathname: string;
}

export const Navigation = ({
  navigation,
  currentPathname
}: NavigationProps) => {
  const dispatch = useAppDispatch();

  const onSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className='hidden sm:block sm:ml-6 z-20'>
      <div className='flex space-x-8 font-nunito'>
        {navigation.map((item) => (
          <NavbarLink
            key={item.name}
            href={item.href}
            isActive={item.href === currentPathname}
            onClick={item.isSignOut ? onSignOut : undefined}
          >
            {item.name}
            {item.extra}
          </NavbarLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
