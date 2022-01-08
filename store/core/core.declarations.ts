import { User } from '../../declarations';

export interface UserState {
  user?: User;
  accessToken?: string;
  refreshToken?: string;
  isAuthenticated: boolean;
}
