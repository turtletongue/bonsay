export interface SignUpState {
  email: string;
  password: string;
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
