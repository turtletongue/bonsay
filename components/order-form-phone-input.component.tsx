import { ChangeEventHandler } from 'react';

import Input from './input.component';
import { selectPhone, setPhone } from '../store/order/order.slice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const OrderFormPhoneInput = () => {
  const dispatch = useAppDispatch();

  const phone = useAppSelector(selectPhone);
  const onPhoneChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setPhone(event.target.value));
  };

  return (
    <Input
      className="mr-2 w-52"
      type="text"
      value={phone}
      onChange={onPhoneChange}
    />
  );
};

export default OrderFormPhoneInput;
