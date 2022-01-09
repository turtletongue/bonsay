import { UserState } from './core.declarations';

export const initialState: UserState = {
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  isAuthenticated: false,
  accessTokenExpireAt: undefined,
  refreshLoading: 'idle',
  refreshError: undefined,
  refreshTokenExpireAt: undefined,
};

export default initialState;
