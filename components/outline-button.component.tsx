import { ReactNode } from 'react';

interface OutlineButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const OutlineButton = ({
  className,
  children,
  onClick
}: OutlineButtonProps) => {
  return (
    <button
      className={`bg-white border-2 border-secondary text-primary text-xs font-hanuman tracking-wider w-full h-12 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
