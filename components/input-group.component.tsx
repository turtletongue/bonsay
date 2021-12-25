import { ReactNode } from 'react';

interface InputGroupProps {
  children?: ReactNode;
  className?: string;
}

export const InputGroup = ({ children, className }: InputGroupProps) => {
  return <div className={`input-group relative ${className}`}>{children}</div>;
};

export default InputGroup;
