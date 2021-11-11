interface ButtonProps {
  children: any;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className='hover:bg-secondary bg-primary mt-6 transition-colors duration-500 easy-out text-white text-xs font-hanuman tracking-wider w-full sm:w-32 h-12'>
      {children}
    </button>
  );
};

export default Button;
