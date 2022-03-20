import { ChangeEventHandler, ReactNode } from 'react';

interface NumberInputProps {
  leftItem?: ReactNode;
  placeholder?: string;
  value?: number;
  min?: number;
  max?: number;
  onChange?: ChangeEventHandler;
}

export const NumberInput = ({
  placeholder,
  leftItem,
  value,
  min = 0,
  max = 1000000,
  onChange,
}: NumberInputProps) => {
  return (
    <>
      <div className="relative my-1">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          {leftItem}
        </div>
        <input
          type="number"
          className="bg-gray border border-gray text-gray text-sm rounded-lg focus:border-secondary focus:ring-green-700 block w-full pl-10 p-2.5"
          placeholder={placeholder}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default NumberInput;
