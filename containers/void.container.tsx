interface VoidProps {
  text: string;
}

export const Void = ({ text }: VoidProps) => {
  return (
    <div className='w-full select-none min-h-screen text-secondary text-xl font-medium text-center flex justify-center items-center'>
      {text}
    </div>
  );
};

export default Void;
