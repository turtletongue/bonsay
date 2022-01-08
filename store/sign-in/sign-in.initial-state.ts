import { SignInState } from './sign-in.declarations';

export const initialState: SignInState = {
  email: '',
  password: '',
  loading: 'idle',
  error: undefined,
};

export default initialState;
