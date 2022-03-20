import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { signIn } from '@store/core/core.slice';
import fetchWithErrorHandling from '@utils/fetch-with-error-handling';
import { api } from '@app/api';
import initialState from './sign-in.initial-state';

import { RootState } from '@store/index';
import { LoginRequest } from './sign-in.declarations';

export const login = createAsyncThunk(
  'signIn/login',
  async (params: LoginRequest, { rejectWithValue, dispatch }) => {
    return await fetchWithErrorHandling(async () => {
      const {
        data: { user, payload },
      } = await axios.post(api.authentication, params, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch(
        signIn({
          user,
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken,
        })
      );
    }, rejectWithValue);
  }
);

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload.trim();
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    clear: (state) => {
      state.email = '';
      state.password = '';
      delete state.error;
    },
  },
  extraReducers: {
    [login.pending as any]: (state) => {
      state.loading = 'pending';
      delete state.error;
    },
    [login.fulfilled as any]: (state) => {
      state.loading = 'idle';
    },
    [login.rejected as any]: (state, action: PayloadAction<string>) => {
      state.loading = 'idle';
      state.error = action.payload;
    },
  },
});

export const { setEmail, setPassword, clear } = signInSlice.actions;

export const selectEmail = (state: RootState) => state.signIn.email;
export const selectPassword = (state: RootState) => state.signIn.password;
export const selectError = (state: RootState) => state.signIn.error;

export default signInSlice.reducer;
