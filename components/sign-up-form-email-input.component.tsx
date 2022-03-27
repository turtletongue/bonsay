import { ChangeEventHandler } from 'react';

import Input from '@components/input.component';
import {
  selectEmail,
  selectEmailError,
  setEmail,
} from '@store/sign-up/sign-up.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const SignUpFormEmailInput = () => {
  const dispatch = useAppDispatch();

  const email = useAppSelector(selectEmail);
  const changeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const emailError = useAppSelector(selectEmailError);

  return (
    <Input
      name="login"
      type="text"
      className="w-52 sm:w-60"
      value={email}
      onChange={changeEmail}
      error={emailError}
    />
  );
};

export default SignUpFormEmailInput;
