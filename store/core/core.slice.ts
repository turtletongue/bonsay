import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState from './core.initial-state';
import { RootState } from '..';
import { User } from '../../declarations';

export const userSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{
        user: User;
        accessToken: string;
        refreshToken: string;
      }>
    ) => {
      const { user, accessToken, refreshToken } = action.payload;

      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isAuthenticated = true;
    },
    signOut: (state) => {
      delete state.user;
      delete state.accessToken;
      delete state.refreshToken;
      state.isAuthenticated = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export const selectUser = (state: RootState) => state.core.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.core.isAuthenticated;
export const selectAccessToken = (state: RootState) => state.core.accessToken;
export const selectRefreshToken = (state: RootState) => state.core.refreshToken;

export default userSlice.reducer;
