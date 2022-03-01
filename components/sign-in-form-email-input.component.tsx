import { ChangeEventHandler } from 'react';

import Input from './input.component';
import { selectEmail, setEmail } from '../store/sign-in/sign-in.slice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const SignInFormEmailInput = () => {
  const dispatch = useAppDispatch();

  const email = useAppSelector(selectEmail);
  const changeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setEmail(event.target.value));
  };

  return (
    <Input
      name="login"
      type="text"
      className="w-100 sm:w-60"
      value={email}
      onChange={changeEmail}
    />
  );
};

export default SignInFormEmailInput;
