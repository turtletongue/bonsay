import Button from '../components/button.component';
import Total from '../components/total.component';

interface OrderSummaryProps {
  total: number;
}

export const OrderSummary = ({ total }: OrderSummaryProps) => {
  return (
    <div>
      <Total total={total} />
      <Button className='mt-6'>ОПЛАТИТЬ</Button>
    </div>
  );
};

export default OrderSummary;
