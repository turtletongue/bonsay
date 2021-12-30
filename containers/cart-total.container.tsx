import { useRouter } from 'next/router';

import Button from '../components/button.component';
import Total from '../components/total.component';

interface CartTotalProps {
  total: number;
}

export const CartTotal = ({ total }: CartTotalProps) => {
  const { push } = useRouter();

  const redirectToOrderPlacing = () => push('/order-placing');

  return (
    <div className='grid grid-cols-1 w-72 select-none'>
      <Total total={total} />
      <Button className='mt-6' onClick={redirectToOrderPlacing}>
        ОПЛАТИТЬ
      </Button>
    </div>
  );
};

export default CartTotal;
