import { ChangeEventHandler } from 'react';

import Input from '@components/input.component';
import { selectStreet, setStreet } from '@store/order/order.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const OrderFormStreetInput = () => {
  const dispatch = useAppDispatch();

  const street = useAppSelector(selectStreet);
  const onStreetChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setStreet(event.target.value));
  };

  return (
    <Input
      className="mr-2 my-1 w-52"
      type="text"
      placeholder="Улица"
      value={street}
      onChange={onStreetChange}
    />
  );
};

export default OrderFormStreetInput;
