import { forwardRef, Ref } from 'react';
import Link from 'next/link';

interface NavbarLinkProps {
  href: string;
  isActive: boolean;
  children: any;
  onClick?: () => void;
}

const NavbarLink = (
  { href, isActive, onClick, children }: NavbarLinkProps,
  ref: Ref<HTMLAnchorElement>
) => {
  return (
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
  );
};

export const NavbarLinkForwarded = forwardRef(NavbarLink);

export default NavbarLinkForwarded;
