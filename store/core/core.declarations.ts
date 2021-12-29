import { Id } from '../../declarations';

export interface User {
  id: Id;
  email: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface UserState {
  user?: User;
  isAuthenticated: boolean;
}
