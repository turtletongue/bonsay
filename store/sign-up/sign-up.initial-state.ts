import { SignUpState } from './sign-up.declarations';

export const initialState: SignUpState = {
  email: '',
  password: '',
  passwordConfirmation: '',
  passwordsError: undefined,
  loading: 'idle',
  registerError: undefined,
  success: false,
};

export default initialState;
