import { Id } from '@app/declarations';

export interface SettingsState {
  email: string;
  newPassword: string;
  confirmPassword: string;
  passwordChangeError?: string;
  isPasswordChange: boolean;
  loading: 'idle' | 'pending';
  error?: string;
  success: boolean;
}

export interface UpdateSettingsRequest {
  id: Id;
  email: string;
  password?: string;
  accessToken: string;
}
