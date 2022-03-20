import Button from '@components/button.component';
import {
  register,
  selectEmail,
  selectPassword,
} from '@store/sign-up/sign-up.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const SignUpButton = () => {
  const dispatch = useAppDispatch();

  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);

  const signUp = () => {
    dispatch(register({ email, password }));
  };

  return (
    <Button className="w-60 mt-6" onClick={signUp}>
      ЗАРЕГИСТРИРОВАТЬСЯ
    </Button>
  );
};

export default SignUpButton;
