export const Search = () => {
  return (
    <div className='sm:w-96'>
      <div className='input-group relative flex items-stretch'>
        <input
          type='search'
          className='form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-primary focus:bg-white focus:ring-green-700 focus:border-secondary focus:outline-none'
          placeholder='Поиск'
          aria-label='Поиск'
        />
      </div>
    </div>
  );
};

export default Search;
