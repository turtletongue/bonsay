import { SettingsState } from './settings.declarations';

export const initialState: SettingsState = {
  email: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  passwordChangeError: undefined,
  isPasswordChange: false,
  loading: 'idle',
  error: undefined,
  success: false,
};

export default initialState;
