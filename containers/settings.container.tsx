import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  clearPasswordFields,
  selectConfirmPassword,
  selectEmail,
  selectIsPasswordChange,
  selectNewPassword,
  selectPasswordChangeError,
  setConfirmPassword,
  setEmail,
  setNewPassword,
  togglePasswordChange,
  updateSettings,
  selectSuccess,
  clear,
} from '../store/settings/settings.slice';
import {
  selectAccessToken,
  selectIsAuthenticated,
} from '../store/core/core.slice';
import OutlineButton from '../components/outline-button.component';
import Button from '../components/button.component';
import Input from '../components/input.component';
import Label from '../components/label.component';

import { User } from '../declarations';

interface SettingsProps {
  user: User;
}

export const Settings = ({ user }: SettingsProps) => {
  const { push } = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setEmail(user?.email || ''));
  }, [dispatch, user?.email]);

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const success = useAppSelector(selectSuccess);

  useEffect(() => {
    if (success || !isAuthenticated) {
      dispatch(clear());

      dispatch(clearPasswordFields());

      push('/');
    }
  }, [dispatch, push, success, isAuthenticated]);

  const isPasswordChange = useAppSelector(selectIsPasswordChange);

  const onIsPasswordChangeToggle = () => {
    if (isPasswordChange) {
      dispatch(clearPasswordFields());
    }

    dispatch(togglePasswordChange());
  };

  const email = useAppSelector(selectEmail);

  const onEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const newPassword = useAppSelector(selectNewPassword);

  const onNewPasswordChange = (event) => {
    dispatch(setNewPassword(event.target.value));
  };

  const confirmPassword = useAppSelector(selectConfirmPassword);

  const onConfirmPasswordChange = (event) => {
    dispatch(setConfirmPassword(event.target.value));
  };

  const passwordChangeError = useAppSelector(selectPasswordChangeError);

  const accessToken = useAppSelector(selectAccessToken);

  const saveChanges = () => {
    dispatch(
      updateSettings({
        id: user.id,
        email,
        accessToken,
        ...(newPassword ? { password: newPassword } : {}),
      })
    );
  };

  return (
    <div className="w-96 mx-auto my-16">
      <div>
        <Label htmlFor="email" className="font-medium text-secondary mb-2">
          Email
        </Label>
        <Input
          name="email"
          type="text"
          className="w-full"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      {isPasswordChange && (
        <div>
          <div className="my-4">
            <Label
              htmlFor="password"
              className="font-medium text-secondary mb-2"
            >
              Придумайте новый пароль
            </Label>
            <Input
              name="password"
              type="password"
              className="w-full"
              value={newPassword}
              onChange={onNewPasswordChange}
              error={passwordChangeError}
            />
          </div>
          <div className="my-4">
            <Label
              htmlFor="password"
              className="font-medium text-secondary mb-2"
            >
              Введите новый пароль ещё раз
            </Label>
            <Input
              name="passwordConfirmation"
              type="password"
              className="w-full"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              error={passwordChangeError}
            />
          </div>
        </div>
      )}
      <div className="mt-4">
        <Button className="mt-2" onClick={saveChanges}>
          СОХРАНИТЬ
        </Button>
        <OutlineButton className="mt-6" onClick={onIsPasswordChangeToggle}>
          {isPasswordChange ? 'ОТМЕНИТЬ' : 'ИЗМЕНИТЬ ПАРОЛЬ'}
        </OutlineButton>
      </div>
    </div>
  );
};

export default Settings;
