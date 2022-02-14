import { ChangeEventHandler } from 'react';

import Input from './input.component';
import { selectHouse, setHouse } from '../store/order/order.slice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const OrderFormHouseInput = () => {
  const dispatch = useAppDispatch();

  const house = useAppSelector(selectHouse);
  const onHouseChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setHouse(event.target.value));
  };

  return (
    <Input
      className="mr-2 my-1 w-52"
      type="text"
      placeholder="Дом"
      value={house}
      onChange={onHouseChange}
    />
  );
};

export default OrderFormHouseInput;
