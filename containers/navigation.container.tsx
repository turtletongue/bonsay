import NavbarLink from '../components/navbar-link.component';

import { NavLink } from '../declarations';

interface NavigationProps {
  navigation: NavLink[];
  currentPathname: string;
}

export const Navigation = ({
  navigation,
  currentPathname
}: NavigationProps) => {
  return (
    <div className='hidden sm:block sm:ml-6 z-20'>
      <div className='flex space-x-8 font-nunito'>
        {navigation.map((item) => (
          <NavbarLink
            key={item.name}
            href={item.href}
            isActive={item.href === currentPathname}
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
