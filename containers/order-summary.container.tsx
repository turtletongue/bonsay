import Button from '../components/button.component';
import Total from '../components/total.component';

export const OrderSummary = () => {
  return (
    <div>
      <Total total={3500} />
      <Button className='mt-6'>ОПЛАТИТЬ</Button>
    </div>
  );
};

export default OrderSummary;
