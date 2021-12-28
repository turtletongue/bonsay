import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`hover:bg-secondary bg-primary transition-colors duration-200 easy-out text-white text-xs font-hanuman tracking-wider w-full h-12 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
