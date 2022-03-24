import { forwardRef, ReactNode, Ref } from 'react';
import Link from 'next/link';

interface NavbarLinkProps {
  href: string;
  isActive: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const NavbarLink = (
  { href, isActive, onClick, children }: NavbarLinkProps,
  ref: Ref<HTMLAnchorElement>
) => {
  return (
    <li>
      <Link href={href}>
        <a
          ref={ref}
          onClick={onClick}
          className={`${
            isActive ? 'text-primary' : 'text-secondary'
          } text-base flex items-center`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

export const NavbarLinkForwarded = forwardRef(NavbarLink);

export default NavbarLinkForwarded;
