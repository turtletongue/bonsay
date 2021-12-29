import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState from './core.initial-state';
import { User } from './core.declarations';
import { RootState } from '..';

export const userSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signOut: (state) => {
      delete state.user;
      state.isAuthenticated = false;
    }
  }
});

export const { signIn, signOut } = userSlice.actions;

export const selectUser = (state: RootState) => state.core.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.core.isAuthenticated;

export default userSlice.reducer;
