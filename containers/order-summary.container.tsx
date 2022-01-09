import StripeCheckout, { Token } from 'react-stripe-checkout';

import { KOPECKS_IN_RUBLE, STRIPE_KEY } from '../variables';
import Button from '../components/button.component';
import Total from '../components/total.component';

interface OrderSummaryProps {
  total: number;
  onCreate: (token: Token) => void;
}

export const OrderSummary = ({ total, onCreate }: OrderSummaryProps) => {
  return (
    <div>
      <Total total={total} />
      <StripeCheckout
        name="Bonsay"
        ComponentClass="div"
        currency="RUB"
        stripeKey={STRIPE_KEY}
        token={onCreate}
        billingAddress={false}
        zipCode={false}
        amount={total * KOPECKS_IN_RUBLE}
        locale="ru"
      >
        <Button className="mt-6">ОПЛАТИТЬ</Button>
      </StripeCheckout>
    </div>
  );
};

export default OrderSummary;
