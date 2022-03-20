import { ChangeEventHandler } from 'react';

import Input from '@components/input.component';
import {
  selectPasswordConfirmation,
  selectPasswordsError,
  setPasswordConfirmation,
} from '@store/sign-up/sign-up.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const SignUpFormPasswordConfirmationInput = () => {
  const dispatch = useAppDispatch();

  const passwordConfirmation = useAppSelector(selectPasswordConfirmation);
  const changePasswordConfirmation: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(setPasswordConfirmation(event.target.value));
  };

  const passwordsError = useAppSelector(selectPasswordsError);

  return (
    <Input
      name="passwordСonfirmation"
      type="password"
      className="w-52 sm:w-60"
      value={passwordConfirmation}
      onChange={changePasswordConfirmation}
      error={passwordsError}
    />
  );
};

export default SignUpFormPasswordConfirmationInput;
