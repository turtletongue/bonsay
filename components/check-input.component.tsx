import { ChangeEventHandler } from 'react';

interface CheckInputProps {
  id: string;
  title: string;
  selected: boolean;
  onChange?: ChangeEventHandler;
}

export const CheckInput = ({
  id,
  title,
  selected,
  onChange,
}: CheckInputProps) => {
  return (
    <div className="flex items-center my-1">
      <input
        id={id}
        value={id}
        type="checkbox"
        className="form-checkbox h-4 w-4 border-gray rounded text-secondary border-secondary"
        checked={selected}
        onChange={onChange}
      />
      <label htmlFor={id} className="ml-3 min-w-0 flex-1 text-gray">
        {title}
      </label>
    </div>
  );
};

export default CheckInput;
