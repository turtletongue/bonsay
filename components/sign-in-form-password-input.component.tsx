import { ChangeEventHandler } from 'react';

import Input from './input.component';
import { selectPassword, setPassword } from '../store/sign-in/sign-in.slice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const SignInFormPasswordInput = () => {
  const dispatch = useAppDispatch();

  const password = useAppSelector(selectPassword);
  const changePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setPassword(event.target.value));
  };

  return (
    <Input
      name="password"
      type="password"
      className="w-52 sm:w-60"
      value={password}
      onChange={changePassword}
    />
  );
};

export default SignInFormPasswordInput;
