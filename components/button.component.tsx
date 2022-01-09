import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  isDisabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  className,
  isDisabled = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`bg-primary ${
        isDisabled ? 'opacity-50 cursor-default' : 'hover:bg-secondary'
      } transition duration-200 easy-out text-white text-xs font-hanuman tracking-wider w-full h-12 ${className}`}
      onClick={!isDisabled ? onClick : () => {}}
    >
      {children}
    </button>
  );
};

export default Button;
