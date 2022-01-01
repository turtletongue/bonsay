import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  clearPasswordFields,
  selectConfirmPassword,
  selectCurrentPassword,
  selectEmail,
  selectIsPasswordChange,
  selectNewPassword,
  selectPasswordChangeError,
  setConfirmPassword,
  setCurrentPassword,
  setEmail,
  setNewPassword,
  togglePasswordChange
} from '../store/settings/settings.slice';
import OutlineButton from '../components/outline-button.component';
import Button from '../components/button.component';
import Input from '../components/input.component';
import Label from '../components/label.component';

import { User } from '../declarations';

interface SettingsProps {
  user: User;
}

export const Settings = ({ user }: SettingsProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setEmail(user?.email || ''));
  }, [dispatch, user?.email]);

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

  const currentPassword = useAppSelector(selectCurrentPassword);

  const onCurrentPasswordChange = (event) => {
    dispatch(setCurrentPassword(event.target.value));
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

  return (
    <div className='w-96 mx-auto my-16'>
      <div>
        <Label htmlFor='email' className='font-medium text-secondary mb-2'>
          Email
        </Label>
        <Input
          name='email'
          type='text'
          className='w-full'
          value={email}
          onChange={onEmailChange}
        />
      </div>
      {isPasswordChange && (
        <div>
          <div className='my-4'>
            <Label
              htmlFor='password'
              className='font-medium text-secondary mb-2'
            >
              Введите текущий пароль
            </Label>
            <Input
              name='password'
              type='password'
              className='w-full'
              value={currentPassword}
              onChange={onCurrentPasswordChange}
            />
          </div>
          <div className='my-4'>
            <Label
              htmlFor='password'
              className='font-medium text-secondary mb-2'
            >
              Придумайте новый пароль
            </Label>
            <Input
              name='password'
              type='password'
              className='w-full'
              value={newPassword}
              onChange={onNewPasswordChange}
              error={passwordChangeError}
            />
          </div>
          <div className='my-4'>
            <Label
              htmlFor='password'
              className='font-medium text-secondary mb-2'
            >
              Введите новый пароль ещё раз
            </Label>
            <Input
              name='passwordConfirmation'
              type='password'
              className='w-full'
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              error={passwordChangeError}
            />
          </div>
        </div>
      )}
      <div className='mt-4'>
        <OutlineButton className='mt-2' onClick={onIsPasswordChangeToggle}>
          {isPasswordChange ? 'ОТМЕНИТЬ' : 'ИЗМЕНИТЬ ПАРОЛЬ'}
        </OutlineButton>
        <Button className='mt-6'>СОХРАНИТЬ</Button>
      </div>
    </div>
  );
};

export default Settings;
