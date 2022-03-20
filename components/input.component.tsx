import { ChangeEventHandler } from 'react';

interface InputProps {
  className?: string;
  type?: 'text' | 'number' | 'password' | 'search';
  name?: string;
  value?: string | number;
  error?: string;
  onChange?: ChangeEventHandler;
  placeholder?: string;
  'aria-label'?: string;
}

export const Input = (props: InputProps) => {
  const { type, placeholder, name, value, error, onChange, className } = props;

  return (
    <>
      <input
        type={type}
        name={name}
        className={`form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray bg-white bg-clip-padding border border-solid focus:bg-white ${
          error
            ? 'focus:ring-red-700 focus:border-red border-red'
            : 'focus:ring-green-700 focus:border-secondary border-gray'
        } rounded transition ease-in-out m-0 focus:text-primary focus:outline-none ${className}`}
        placeholder={placeholder}
        aria-label={props['aria-label']}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red text-xs mt-1 font-medium">{error}</p>}
    </>
  );
};

export default Input;
