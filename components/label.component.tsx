import { ReactNode } from 'react';

interface LabelProps {
  className?: string;
  htmlFor: string;
  children: ReactNode;
}

export const Label = ({ htmlFor, className, children }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-primary ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
