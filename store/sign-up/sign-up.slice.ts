import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { login } from '@store/sign-in/sign-in.slice';
import fetchWithErrorHandling from '@utils/fetch-with-error-handling';
import { api } from '@app/api';
import initialState from './sign-up.initial-state';

import { RootState } from '@store/index';
import { RegisterRequest } from './sign-up.declarations';

export const register = createAsyncThunk(
  'signUp/register',
  async (params: RegisterRequest, { rejectWithValue, dispatch }) => {
    return await fetchWithErrorHandling(async () => {
      await axios.post(api.clients, params, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch(login(params));
    }, rejectWithValue);
  }
);

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload.trim();

      state.emailError =
        state.email.length <= 3 || !state.email.includes('@')
          ? 'Некорректный email'
          : undefined;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;

      state.passwordsError =
        state.password === state.passwordConfirmation
          ? undefined
          : 'Пароли не совпадают';

      state.onlyPasswordError =
        state.password.length < 7
          ? 'Пароль содержит менее 7 символов'
          : undefined;
    },
    setPasswordConfirmation: (state, action: PayloadAction<string>) => {
      state.passwordConfirmation = action.payload;

      state.passwordsError =
        state.password === state.passwordConfirmation
          ? undefined
          : 'Пароли не совпадают';
    },
    clear: (state) => {
      state.password = '';
      state.passwordConfirmation = '';
      state.email = '';
      state.passwordsError = undefined;
      state.success = false;
    },
  },
  extraReducers: {
    [register.pending as any]: (state) => {
      state.loading = 'pending';
      state.registerError = undefined;
      state.success = false;
    },
    [register.fulfilled as any]: (state) => {
      state.loading = 'idle';
      state.success = true;
    },
    [register.rejected as any]: (state, action: PayloadAction<string>) => {
      state.loading = 'idle';
      state.registerError = action.payload;
    },
  },
});

export const { setEmail, setPassword, setPasswordConfirmation, clear } =
  signUpSlice.actions;

export const selectEmail = (state: RootState) => state.signUp.email;
export const selectEmailError = (state: RootState) => state.signUp.emailError;
export const selectPassword = (state: RootState) => state.signUp.password;
export const selectOnlyPasswordError = (state: RootState) =>
  state.signUp.onlyPasswordError;
export const selectPasswordConfirmation = (state: RootState) =>
  state.signUp.passwordConfirmation;
export const selectPasswordsError = (state: RootState) =>
  state.signUp.passwordsError;
export const selectIsLoading = (state: RootState) =>
  state.signUp.loading === 'pending';
export const selectSuccess = (state: RootState) => state.signUp.success;
export const selectError = (state: RootState) => state.signUp.registerError;

export default signUpSlice.reducer;
