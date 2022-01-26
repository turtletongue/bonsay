import Link from 'next/link';
import { ReactChild } from 'react';

interface UnderlineLinkProps {
  href: string;
  children: ReactChild;
}

export const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <Link href={href}>
      <a className="text-secondary underline font-poppins">{children}</a>
    </Link>
  );
};

export default UnderlineLink;
