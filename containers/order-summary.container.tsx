import Button from '../components/button.component';
import Total from '../components/total.component';

interface OrderSummaryProps {
  total: number;
  onCreate?: () => void;
}

export const OrderSummary = ({ total, onCreate }: OrderSummaryProps) => {
  return (
    <div>
      <Total total={total} />
      <Button className="mt-6" onClick={onCreate}>
        ОПЛАТИТЬ
      </Button>
    </div>
  );
};

export default OrderSummary;
