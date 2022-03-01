import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAlert } from 'react-alert';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  clearPasswordFields,
  selectEmail,
  selectIsPasswordChange,
  selectNewPassword,
  setEmail,
  updateSettings,
  selectSuccess,
  clear,
  selectError,
} from '../store/settings/settings.slice';
import {
  selectAccessToken,
  selectIsAuthenticated,
} from '../store/core/core.slice';
import { SUCCESS_SAVE } from '../utils/alert-messages';
import Button from '../components/button.component';
import ProfileEmailSection from './profile-email-section.container';
import ProfilePasswordSection from './profile-password-section.container';

import { User } from '../declarations';
import ProfilePasswordChangeButton from '../components/profile-password-change-button.component';

interface SettingsProps {
  user: User;
}

export const Settings = ({ user }: SettingsProps) => {
  const { push } = useRouter();

  const dispatch = useAppDispatch();

  const alert = useAlert();

  useEffect(() => {
    dispatch(setEmail(user?.email || ''));
  }, [dispatch, user?.email]);

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const success = useAppSelector(selectSuccess);

  useEffect(() => {
    if (success) {
      alert.success(SUCCESS_SAVE);
    }

    if (success || !isAuthenticated) {
      dispatch(clear());

      dispatch(clearPasswordFields());

      push('/');
    }
  }, [dispatch, push, alert, success, isAuthenticated]);

  const isPasswordChange = useAppSelector(selectIsPasswordChange);
  const email = useAppSelector(selectEmail);
  const newPassword = useAppSelector(selectNewPassword);
  const accessToken = useAppSelector(selectAccessToken);

  const error = useAppSelector(selectError);

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
    <div className="w-52 sm:w-96 mx-auto my-16 relative">
      {error && (
        <div className="absolute -top-6 text-red text-sm text-center w-full">
          {error}
        </div>
      )}
      <ProfileEmailSection />
      {isPasswordChange && <ProfilePasswordSection />}
      <div className="mt-4">
        <Button className="mt-2" onClick={saveChanges}>
          СОХРАНИТЬ
        </Button>
        <ProfilePasswordChangeButton />
      </div>
    </div>
  );
};

export default Settings;
