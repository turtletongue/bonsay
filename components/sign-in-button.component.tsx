import Button from '@components/button.component';
import {
  login,
  selectEmail,
  selectPassword,
} from '@store/sign-in/sign-in.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const SignInButton = () => {
  const dispatch = useAppDispatch();

  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);

  const signIn = () => {
    dispatch(login({ email, password }));
  };

  return (
    <Button className="w-60 mt-6" onClick={signIn}>
      ВОЙТИ
    </Button>
  );
};

export default SignInButton;
