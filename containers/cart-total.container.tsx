import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import Button from '@components/button.component';
import Total from '@components/total.component';
import OutlineButton from '@components/outline-button.component';
import { selectIsAuthenticated } from '@store/core/core.slice';
import { useAppSelector } from '@app/hooks';

interface CartTotalProps {
  total: number;
  children?: ReactNode;
}

export const CartTotal = ({ total, children }: CartTotalProps) => {
  const { push } = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const redirectToOrderPlacing = () => push('/order-placing');
  const redirectToSignIn = () => push('/sign-in');

  return (
    <div className="grid grid-cols-1 w-full justify-center max-w-5xl select-none mx-auto my-4 p-4 w-full">
      <div className="w-full relative">
        <Total total={total} className="absolute w-full" />
        <hr className="max-w-5xl mx-auto opacity-30 mt-4" />
      </div>
      {children}
      {isAuthenticated ? (
        <Button
          className="mt-6 max-w-xl mx-auto"
          onClick={redirectToOrderPlacing}
        >
          ОФОРМЛЕНИЕ ЗАКАЗА
        </Button>
      ) : (
        <OutlineButton
          className="mt-6 max-w-xl mx-auto"
          onClick={redirectToSignIn}
        >
          ВОЙТИ В АККАУНТ
        </OutlineButton>
      )}
    </div>
  );
};

export default CartTotal;
