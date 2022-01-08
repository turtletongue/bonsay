import { UserState } from './core.declarations';

export const initialState: UserState = {
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  isAuthenticated: false,
};

export default initialState;
