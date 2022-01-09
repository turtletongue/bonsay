import StripeCheckout, { Token } from 'react-stripe-checkout';

import { KOPECKS_IN_RUBLE, STRIPE_KEY } from '../variables';
import Button from '../components/button.component';
import Total from '../components/total.component';

interface OrderSummaryProps {
  total: number;
  isButtonDisabled?: boolean;
  onCreate: (token: Token) => void;
}

export const OrderSummary = ({
  total,
  isButtonDisabled = false,
  onCreate,
}: OrderSummaryProps) => {
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
