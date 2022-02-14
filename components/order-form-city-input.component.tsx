import { ChangeEventHandler } from 'react';

import Input from './input.component';
import { selectCity, setCity } from '../store/order/order.slice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const OrderFormCityInput = () => {
  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);
  const onCityChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setCity(event.target.value));
  };

  return (
    <Input
      className="mr-2 my-1 w-52"
      type="text"
      placeholder="Город"
      value={city}
      onChange={onCityChange}
    />
  );
};

export default OrderFormCityInput;
