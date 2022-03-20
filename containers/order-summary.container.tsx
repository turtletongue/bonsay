import StripeCheckout, { Token } from 'react-stripe-checkout';

import Total from '@components/total.component';
import Button from '@components/button.component';
import { selectCartItems, selectTotal } from '@store/cart/cart.slice';
import {
  createOrder,
  selectCity,
  selectFirstname,
  selectHouse,
  selectIsLoading,
  selectLastname,
  selectPhone,
  selectPostcode,
  selectStreet,
} from '@store/order/order.slice';
import { selectAccessToken } from '@store/core/core.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { KOPECKS_IN_RUBLE, STRIPE_KEY } from '@app/variables';

export const OrderSummary = () => {
  const dispatch = useAppDispatch();

  const total = useAppSelector(selectTotal);

  const firstname = useAppSelector(selectFirstname);
  const lastname = useAppSelector(selectLastname);
  const city = useAppSelector(selectCity);
  const street = useAppSelector(selectStreet);
  const house = useAppSelector(selectHouse);
  const postcode = useAppSelector(selectPostcode);
  const phone = useAppSelector(selectPhone);

  const cartItems = useAppSelector(selectCartItems);

  const accessToken = useAppSelector(selectAccessToken);

  const isLoading = useAppSelector(selectIsLoading);

  const isButtonDisabled =
    !firstname ||
    !lastname ||
    !city ||
    !street ||
    !house ||
    !postcode ||
    !phone ||
    isLoading;

  const onCreate = (token: Token) => {
    dispatch(
      createOrder({
        accessToken,
        fullname: { firstname, lastname },
        address: { city, street, house, postcode },
        phone,
        cartItems,
        token,
        total,
      })
    );
  };

  const button = (
    <Button className="mt-6" isDisabled={isButtonDisabled}>
      ОПЛАТИТЬ
    </Button>
  );

  return (
    <div>
      <Total total={total} />
      {isButtonDisabled ? (
        button
      ) : (
        <StripeCheckout
          name="Bonsay"
          ComponentClass="div"
          currency="RUB"
          stripeKey={STRIPE_KEY}
          token={onCreate}
          billingAddress={false}
          zipCode={false}
          amount={total * KOPECKS_IN_RUBLE}
        >
          {button}
        </StripeCheckout>
      )}
    </div>
  );
};

export default OrderSummary;
