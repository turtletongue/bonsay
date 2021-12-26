import Button from '../components/button.component';

interface CartTotalProps {
  total: number;
}

export const CartTotal = ({ total }: CartTotalProps) => {
  return (
    <div className='grid grid-cols-1 w-72'>
      <div className='flex justify-between'>
        <div className='font-medium'>Итого к оплате</div>
        <div>{total.toFixed(2)} ₽</div>
      </div>
      <Button>ОПЛАТИТЬ</Button>
    </div>
  );
};

export default CartTotal;
