import { ChangeEventHandler } from 'react';

import Input from '@components/input.component';
import { selectLastname, setLastname } from '@store/order/order.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const OrderFormLastnameInput = () => {
  const dispatch = useAppDispatch();

  const lastname = useAppSelector(selectLastname);
  const onLastnameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setLastname(event.target.value));
  };

  return (
    <Input
      className="mr-2 my-1 w-52"
      type="text"
      placeholder="Фамилия"
      value={lastname}
      onChange={onLastnameChange}
    />
  );
};

export default OrderFormLastnameInput;
