export interface SettingsState {
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  passwordChangeError?: string;
  isPasswordChange: boolean;
}
