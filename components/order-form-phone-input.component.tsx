import PhoneInput from '@components/phone-input.component';
import { selectPhone, setPhone } from '@store/order/order.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const OrderFormPhoneInput = () => {
  const dispatch = useAppDispatch();

  const phone = useAppSelector(selectPhone);
  const changePhone = (phone: string) => {
    dispatch(setPhone(phone));
  };

  return (
    <PhoneInput className="mr-2 w-52" value={phone} setPhone={changePhone} />
  );
};

export default OrderFormPhoneInput;
