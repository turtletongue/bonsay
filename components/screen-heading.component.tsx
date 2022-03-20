import { ReactChild } from 'react';

import ArrowLink from '@components/arrow-link.component';

interface ScreenHeadingProps {
  href: string;
  children: ReactChild;
}

export const ScreenHeading = ({ children, href }: ScreenHeadingProps) => {
  return (
    <div className="flex justify-between mb-6 m-auto items-center">
      <div className="text-primary text-2xl font-nunito">{children}</div>
      <ArrowLink href={href}>Посмотреть всё</ArrowLink>
    </div>
  );
};

export default ScreenHeading;
