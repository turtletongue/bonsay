import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <button
      className={`hover:bg-secondary bg-primary mt-6 transition-colors duration-200 easy-out text-white text-xs font-hanuman tracking-wider w-full h-12 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
