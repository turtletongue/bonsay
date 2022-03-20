import { ChangeEventHandler } from 'react';

import Input from '@components/input.component';
import {
  selectConfirmPassword,
  selectPasswordChangeError,
  setConfirmPassword,
} from '@store/settings/settings.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const ProfilePasswordInput = () => {
  const dispatch = useAppDispatch();

  const confirmPassword = useAppSelector(selectConfirmPassword);
  const onConfirmPasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(setConfirmPassword(event.target.value));
  };

  const passwordChangeError = useAppSelector(selectPasswordChangeError);

  return (
    <Input
      name="passwordConfirmation"
      type="password"
      className="w-full"
      value={confirmPassword}
      onChange={onConfirmPasswordChange}
      error={passwordChangeError}
    />
  );
};

export default ProfilePasswordInput;
