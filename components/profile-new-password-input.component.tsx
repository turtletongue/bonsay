import { ChangeEventHandler } from 'react';

import Input from '@components/input.component';
import {
  selectNewPassword,
  selectNewPasswordError,
  selectPasswordChangeError,
  setNewPassword,
} from '@store/settings/settings.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const ProfileNewPasswordInput = () => {
  const dispatch = useAppDispatch();

  const newPassword = useAppSelector(selectNewPassword);
  const onNewPasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setNewPassword(event.target.value));
  };

  const newPasswordError = useAppSelector(selectNewPasswordError);
  const passwordChangeError = useAppSelector(selectPasswordChangeError);

  return (
    <Input
      name="password"
      type="password"
      className="w-full"
      value={newPassword}
      onChange={onNewPasswordChange}
      error={passwordChangeError || newPasswordError}
    />
  );
};

export default ProfileNewPasswordInput;
