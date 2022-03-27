import Button from '@components/button.component';
import {
  register,
  selectEmail,
  selectEmailError,
  selectOnlyPasswordError,
  selectPassword,
  selectPasswordsError,
} from '@store/sign-up/sign-up.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const SignUpButton = () => {
  const dispatch = useAppDispatch();

  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);

  const signUp = () => {
    dispatch(register({ email, password }));
  };

  const emailError = useAppSelector(selectEmailError);
  const passwordsError = useAppSelector(selectPasswordsError);
  const onlyPasswordError = useAppSelector(selectOnlyPasswordError);

  const isError =
    !!emailError ||
    !!passwordsError ||
    !!onlyPasswordError ||
    !email.length ||
    !password.length;

  return (
    <Button className="w-60 mt-6" isDisabled={isError} onClick={signUp}>
      ЗАРЕГИСТРИРОВАТЬСЯ
    </Button>
  );
};

export default SignUpButton;
