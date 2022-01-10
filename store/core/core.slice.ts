import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import initialState from './core.initial-state';
import { ACCESS_TOKEN_TTL, REFRESH_TOKEN_TTL } from '../../variables';
import { api } from '../../api';

import { User } from '../../declarations';
import {
  ReevokeTokensRequest,
  RefreshTokensRequest,
} from './core.declarations';
import { RootState } from '..';

export const refreshTokens = createAsyncThunk(
  'core/refreshTokens',
  async (params: RefreshTokensRequest, { rejectWithValue, dispatch }) => {
    try {
      const {
        data: {
          data: { user, payload },
        },
      } = await axios.post(api.refresh, params, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch(signIn({ user, accessToken: payload.accessToken }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const revokeToken = createAsyncThunk(
  'core/revokeToken',
  async (params: ReevokeTokensRequest, { rejectWithValue }) => {
    try {
      await axios.post(api.revoke, params, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{
        user: User;
        accessToken: string;
        refreshToken?: string;
      }>
    ) => {
      const { user, accessToken, refreshToken } = action.payload;

      state.user = user;
      state.accessToken = accessToken;
      state.isAuthenticated = true;
      state.accessTokenExpireAt = new Date(
        Date.now() + ACCESS_TOKEN_TTL
      ).toISOString();

      if (refreshToken) {
        state.refreshToken = refreshToken;
        state.refreshTokenExpireAt = new Date(
          Date.now() + REFRESH_TOKEN_TTL
        ).toISOString();
      }
    },
    signOut: (state) => {
      delete state.user;
      delete state.accessToken;
      delete state.refreshToken;
      delete state.accessTokenExpireAt;
      delete state.refreshTokenExpireAt;
      state.isAuthenticated = false;
    },
  },
  extraReducers: {
    [refreshTokens.pending as any]: (state) => {
      state.refreshLoading = 'pending';
      delete state.refreshError;
    },
    [refreshTokens.fulfilled as any]: (state) => {
      state.refreshLoading = 'idle';
    },
    [refreshTokens.rejected as any]: (state, action: PayloadAction<string>) => {
      state.refreshLoading = 'idle';
      state.refreshError = action.payload;
    },
    [revokeToken.pending as any]: (state) => {
      state.revokeLoading = 'pending';
      delete state.revokeError;
    },
    [revokeToken.fulfilled as any]: (state) => {
      state.revokeLoading = 'idle';
    },
    [revokeToken.rejected as any]: (state, action: PayloadAction<string>) => {
      state.revokeLoading = 'idle';
      state.revokeError = action.payload;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export const selectUser = (state: RootState) => state.core.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.core.isAuthenticated;
export const selectAccessToken = (state: RootState) => state.core.accessToken;
export const selectRefreshToken = (state: RootState) => state.core.refreshToken;
export const selectAccessTokenExpireAt = (state: RootState) =>
  state.core.accessTokenExpireAt;
export const selectRefreshTokenExpireAt = (state: RootState) =>
  state.core.refreshTokenExpireAt;

export default userSlice.reducer;
