import { ChangeEventHandler } from 'react';

import Input from '@components/input.component';
import {
  selectPassword,
  selectPasswordsError,
  setPassword,
} from '@store/sign-up/sign-up.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const SignUpFormPasswordInput = () => {
  const dispatch = useAppDispatch();

  const password = useAppSelector(selectPassword);
  const changePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const passwordsError = useAppSelector(selectPasswordsError);

  return (
    <Input
      name="password"
      type="password"
      className="w-52 sm:w-60"
      value={password}
      onChange={changePassword}
      error={passwordsError}
    />
  );
};

export default SignUpFormPasswordInput;
