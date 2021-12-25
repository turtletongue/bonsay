interface InputProps {
  className?: string;
  type?: 'text' | 'number' | 'password' | 'search';
  name?: string;
  placeholder?: string;
  'aria-label'?: string;
}

export const Input = (props: InputProps) => {
  const { type, placeholder, name, className } = props;

  return (
    <input
      type={type}
      name={name}
      className={`form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-primary focus:bg-white focus:ring-green-700 focus:border-secondary focus:outline-none ${className}`}
      placeholder={placeholder}
      aria-label={props['aria-label']}
    />
  );
};

export default Input;
