export interface SignUpState {
  email: string;
  emailError?: string;
  password: string;
  onlyPasswordError?: string;
  passwordConfirmation: string;
  passwordsError?: string;
  loading: 'idle' | 'pending';
  registerError?: string;
  success: boolean;
}

export interface RegisterRequest {
  email: string;
  password: string;
}
