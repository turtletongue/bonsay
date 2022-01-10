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
  revokeLoading: 'idle' | 'pending';
  revokeError?: string;
}

export interface RefreshTokensRequest {
  refreshToken: string;
}

export interface ReevokeTokensRequest {
  refreshToken: string;
}
