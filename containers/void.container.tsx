import { ReactNode } from 'react';

interface VoidProps {
  text: ReactNode;
  className?: string;
}

export const Void = ({ text, className }: VoidProps) => {
  return (
    <div
      className={`w-full select-none ${
        className ? className : 'min-h-screen'
      } text-secondary text-xl font-medium text-center flex justify-center items-center`}
    >
      {text}
    </div>
  );
};

export default Void;
