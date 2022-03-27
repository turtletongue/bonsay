import { SettingsState } from './settings.declarations';

export const initialState: SettingsState = {
  email: '',
  emailError: undefined,
  newPassword: '',
  newPasswordError: undefined,
  confirmPassword: '',
  passwordChangeError: undefined,
  isPasswordChange: false,
  loading: 'idle',
  error: undefined,
  success: false,
};

export default initialState;
