import { User } from '../../declarations';

export interface UserState {
  user?: User;
  accessToken?: string;
  refreshToken?: string;
  isAuthenticated: boolean;
  accessTokenExpireAt?: string;
  refreshTokenExpireAt?: string;
  refreshLoading: 'idle' | 'pending';
  refreshError?: string;
}

export interface RefreshTokensRequest {
  refreshToken: string;
}
