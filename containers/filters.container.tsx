import { useAppDispatch, useAppSelector } from '../hooks';
import {
  selectFilterCategories,
  selectMaximumAge,
  selectMaximumPrice,
  selectMinimumAge,
  selectMinimumPrice,
  selectSortId,
  setMaximumAge,
  setMaximumPrice,
  setMinimumAge,
  setMinimumPrice,
  setPage,
  setSortId,
} from '../store/products/products.slice';
import {
  fetchCategories,
  selectCategories,
} from '../store/categories/categories.slice';
import {
  DEFAULT_AGE_MAXIMUM,
  DEFAULT_AGE_MINIMUM,
  DEFAULT_PRICE_MAXIMUM,
  DEFAULT_PRICE_MINIMUM,
  sortTypes,
} from '../variables';
import RangeFilter from './range-filter.container';
import SelectionFilter from './selection-filter.container';
import RadioFilter from './radio-filter.container';

interface FiltersProps {
  className?: string;
}

export const Filters = ({ className }: FiltersProps) => {
  const dispatch = useAppDispatch();

  const categories = useAppSelector(selectCategories);

  const minimumPrice = useAppSelector(selectMinimumPrice);
  const maximumPrice = useAppSelector(selectMaximumPrice);

  const changeMinimumPrice = (event) => {
    const value = +event.target.value;

    if (value > DEFAULT_PRICE_MAXIMUM) {
      dispatch(setMinimumPrice(DEFAULT_PRICE_MAXIMUM));
    } else if (value < DEFAULT_PRICE_MINIMUM) {
      dispatch(setMinimumPrice(DEFAULT_PRICE_MINIMUM));
    } else if (value > maximumPrice) {
      dispatch(setMinimumPrice(value));
      dispatch(setMaximumPrice(value));
    } else {
      dispatch(setMinimumPrice(value));
    }

    dispatch(setPage(1));
  };

  const changeMaximumPrice = (event) => {
    const value = +event.target.value;

    if (value > DEFAULT_PRICE_MAXIMUM) {
      dispatch(setMaximumPrice(DEFAULT_PRICE_MAXIMUM));
    } else if (value < DEFAULT_PRICE_MINIMUM) {
      dispatch(setMaximumPrice(DEFAULT_PRICE_MINIMUM));
    } else if (value < minimumPrice) {
      dispatch(setMaximumPrice(value));
      dispatch(setMinimumPrice(value));
    } else {
      dispatch(setMaximumPrice(value));
    }

    dispatch(setPage(1));
  };

  const minimumAge = useAppSelector(selectMinimumAge);
  const maximumAge = useAppSelector(selectMaximumAge);

  const changeMinimumAge = (event) => {
    const value = +event.target.value;

    if (value > DEFAULT_AGE_MAXIMUM) {
      dispatch(setMinimumAge(DEFAULT_AGE_MAXIMUM));
    } else if (value < DEFAULT_AGE_MINIMUM) {
      dispatch(setMinimumAge(DEFAULT_AGE_MINIMUM));
    } else if (value > maximumAge) {
      dispatch(setMinimumAge(value));
      dispatch(setMaximumAge(value));
    } else {
      dispatch(setMinimumAge(value));
    }

    dispatch(setPage(1));
  };

  const changeMaximumAge = (event) => {
    const value = +event.target.value;

    if (value > DEFAULT_AGE_MAXIMUM) {
      dispatch(setMaximumAge(DEFAULT_AGE_MAXIMUM));
    } else if (value < DEFAULT_AGE_MINIMUM) {
      dispatch(setMaximumAge(DEFAULT_AGE_MINIMUM));
    } else if (value < minimumAge) {
      dispatch(setMinimumAge(value));
      dispatch(setMaximumAge(value));
    } else {
      dispatch(setMaximumAge(value));
    }

    dispatch(setPage(1));
  };

  const selectedCategories = useAppSelector(selectFilterCategories);

  const selectedSortId = useAppSelector(selectSortId);
  const changeSortId = (event) => {
    if (event.target.checked) {
      dispatch(setSortId(event.target.value));
    }

    dispatch(setPage(1));
  };

  return (
    <div className={className}>
      <RadioFilter
        title="Сортировка"
        values={sortTypes}
        selectedId={selectedSortId}
        onChange={changeSortId}
      />
      <RangeFilter
        title="Цена"
        min={minimumPrice}
        max={maximumPrice}
        onMinChange={changeMinimumPrice}
        onMaxChange={changeMaximumPrice}
      />
      <RangeFilter
        title="Возраст"
        min={minimumAge}
        max={maximumAge}
        onMinChange={changeMinimumAge}
        onMaxChange={changeMaximumAge}
      />
      <SelectionFilter
        title="Категория"
        values={categories}
        selected={selectedCategories}
      />
    </div>
  );
};

export default Filters;
