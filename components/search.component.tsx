import { ChangeEventHandler } from 'react';

import InputGroup from './input-group.component';
import Input from './input.component';

interface SearchProps {
  value: string;
  onChange?: ChangeEventHandler;
}

export const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className='sm:w-96'>
      <InputGroup className='flex items-stretch'>
        <Input
          type='search'
          placeholder='Поиск'
          aria-label='Поиск'
          value={value}
          onChange={onChange}
        />
      </InputGroup>
    </div>
  );
};

export default Search;
