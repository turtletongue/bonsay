import { ChangeEventHandler } from 'react';

interface RadioInputProps {
  id: string;
  title: string;
  name: string;
  selected: boolean;
  onChange?: ChangeEventHandler;
}

export const RadioInput = ({
  id,
  title,
  selected,
  name,
  onChange
}: RadioInputProps) => {
  return (
    <div className='flex items-center my-1'>
      <input
        id={id}
        value={id}
        name={name}
        type='radio'
        className='form-checkbox h-4 w-4 border-gray rounded text-secondary border-secondary'
        checked={selected}
        onChange={onChange}
      />
      <label htmlFor={id} className='ml-3 min-w-0 flex-1 text-gray'>
        {title}
      </label>
    </div>
  );
};

export default RadioInput;
