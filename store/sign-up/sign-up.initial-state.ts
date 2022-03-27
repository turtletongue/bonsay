import { SignUpState } from './sign-up.declarations';

export const initialState: SignUpState = {
  email: '',
  emailError: undefined,
  password: '',
  onlyPasswordError: undefined,
  passwordConfirmation: '',
  passwordsError: undefined,
  loading: 'idle',
  registerError: undefined,
  success: false,
};

export default initialState;
