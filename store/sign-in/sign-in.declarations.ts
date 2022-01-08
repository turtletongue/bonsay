export interface SignInState {
  email: string;
  password: string;
  loading: 'idle' | 'pending';
  error?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
