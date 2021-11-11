interface ButtonProps {
  children: any;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className='absolute block border border-green-900 bg-white w-44 h-12 opacity-0 group-hover:opacity-100 transition'>
      {children}
    </button>
  );
};

export default Button;
