import { ChangeEventHandler } from 'react';

import Input from '@components/input.component';
import { selectFirstname, setFirstname } from '@store/order/order.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const OrderFormFirstnameInput = () => {
  const dispatch = useAppDispatch();

  const firstname = useAppSelector(selectFirstname);
  const onFirstnameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setFirstname(event.target.value));
  };

  return (
    <Input
      className="mr-2 my-1 w-52"
      type="text"
      placeholder="Имя"
      value={firstname}
      onChange={onFirstnameChange}
    />
  );
};

export default OrderFormFirstnameInput;
