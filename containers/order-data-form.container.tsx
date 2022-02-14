import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAlert } from 'react-alert';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  clear,
  removeError,
  selectError,
  selectSuccess,
} from '../store/order/order.slice';
import { clearCart } from '../store/cart/cart.slice';
import { ERROR_PAYMENT, SUCCESS_PAYMENT } from '../utils/alert-messages';
import OrderSummary from './order-summary.container';
import OrderFormFullnameSection from './order-form-fullname-section.container';
import OrderFormAddressSection from './order-form-address-section.container';
import OrderFormPhoneSection from './order-form-phone-section.container';

export const OrderDataForm = () => {
  const { push } = useRouter();

  const alert = useAlert();

  const dispatch = useAppDispatch();

  const success = useAppSelector(selectSuccess);

  useEffect(() => {
    if (success) {
      dispatch(clear());

      dispatch(clearCart());

      alert.success(SUCCESS_PAYMENT);

      push('/');
    }
  }, [dispatch, push, alert, success]);

  const error = useAppSelector(selectError);

  useEffect(() => {
    if (error) {
      alert.error(ERROR_PAYMENT);

      dispatch(removeError());
    }
  }, [dispatch, alert, error]);

  return (
    <div className="grid grid-cols-1 gap-4 justify-center my-10">
      <OrderFormFullnameSection />
      <OrderFormAddressSection />
      <OrderFormPhoneSection />
      <OrderSummary />
    </div>
  );
};

export default OrderDataForm;
