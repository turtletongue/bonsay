import { SettingsState } from './settings.declarations';

export const initialState: SettingsState = {
  email: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  passwordChangeError: undefined,
  isPasswordChange: false
};

export default initialState;
