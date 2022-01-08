import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState from './settings.initial-state';

import { RootState } from '..';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload.trim();
    },
    setCurrentPassword: (state, action: PayloadAction<string>) => {
      state.currentPassword = action.payload;
    },
    setNewPassword: (state, action: PayloadAction<string>) => {
      state.newPassword = action.payload;

      state.passwordChangeError =
        state.newPassword === state.confirmPassword
          ? undefined
          : 'Пароли не совпадают';
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;

      state.passwordChangeError =
        state.newPassword === state.confirmPassword
          ? undefined
          : 'Пароли не совпадают';
    },
    togglePasswordChange: (state) => {
      state.isPasswordChange = !state.isPasswordChange;
    },
    clearPasswordFields: (state) => {
      state.currentPassword = '';
      state.newPassword = '';
      state.confirmPassword = '';
    },
  },
});

export const {
  setEmail,
  setCurrentPassword,
  setNewPassword,
  setConfirmPassword,
  togglePasswordChange,
  clearPasswordFields,
} = settingsSlice.actions;

export const selectEmail = (state: RootState) => state.settings.email;
export const selectCurrentPassword = (state: RootState) =>
  state.settings.currentPassword;
export const selectNewPassword = (state: RootState) =>
  state.settings.newPassword;
export const selectConfirmPassword = (state: RootState) =>
  state.settings.confirmPassword;
export const selectIsPasswordChange = (state: RootState) =>
  state.settings.isPasswordChange;
export const selectPasswordChangeError = (state: RootState) =>
  state.settings.passwordChangeError;

export default settingsSlice.reducer;
