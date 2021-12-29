import { User } from '../../declarations';

export interface UserState {
  user?: User;
  isAuthenticated: boolean;
}
