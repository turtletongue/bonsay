import { useRouter } from 'next/router';

import { useAppSelector } from '../hooks';
import { selectIsAuthenticated } from '../store/core/core.slice';
import Button from '../components/button.component';
import Total from '../components/total.component';
import OutlineButton from '../components/outline-button.component';

interface CartTotalProps {
  total: number;
}

export const CartTotal = ({ total }: CartTotalProps) => {
  const { push } = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const redirectToOrderPlacing = () => push('/order-placing');
  const redirectToSignIn = () => push('/sign-in');

  return (
    <div className="grid grid-cols-1 w-72 select-none">
      <Total total={total} />
      {isAuthenticated ? (
        <Button className="mt-6" onClick={redirectToOrderPlacing}>
          ОФОРМЛЕНИЕ ЗАКАЗА
        </Button>
      ) : (
        <OutlineButton className="mt-6" onClick={redirectToSignIn}>
          ВОЙТИ В АККАУНТ
        </OutlineButton>
      )}
    </div>
  );
};

export default CartTotal;
