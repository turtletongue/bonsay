import RangeFilter from './range-filter.container';
import SelectionFilter from './selection-filter.container';

interface FiltersProps {
  className?: string;
}

export const Filters = ({ className }: FiltersProps) => {
  return (
    <div className={className}>
      <RangeFilter title='Цена' />
      <RangeFilter title='Возраст' max={100} />
      <SelectionFilter
        title='Категория'
        values={['Сосна', 'Яблоня', 'Можжевельник']}
      />
    </div>
  );
};

export default Filters;
