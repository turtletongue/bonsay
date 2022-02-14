import { ChangeEventHandler } from 'react';

import Input from './input.component';
import { selectPostcode, setPostcode } from '../store/order/order.slice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const OrderFormPostcodeInput = () => {
  const dispatch = useAppDispatch();

  const postcode = useAppSelector(selectPostcode);
  const onPostcodeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setPostcode(event.target.value));
  };

  return (
    <Input
      className="mr-2 my-1 w-52"
      type="text"
      placeholder="Почтовый индекс"
      value={postcode}
      onChange={onPostcodeChange}
    />
  );
};

export default OrderFormPostcodeInput;
