import InputGroup from './input-group.component';
import Input from './input.component';

export const Search = () => {
  return (
    <div className='sm:w-96'>
      <InputGroup className='flex items-stretch'>
        <Input type='search' placeholder='Поиск' aria-label='Поиск' />
      </InputGroup>
    </div>
  );
};

export default Search;
