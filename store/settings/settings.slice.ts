import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import fetchWithErrorHandling from '@utils/fetch-with-error-handling';
import { api } from '@app/api';
import initialState from './settings.initial-state';

import { RootState } from '@store/index';
import { UpdateSettingsRequest } from './settings.declarations';

export const updateSettings = createAsyncThunk(
  'settings/updateSettings',
  async (params: UpdateSettingsRequest, { rejectWithValue }) => {
    return await fetchWithErrorHandling(async () => {
      return await axios.patch(`${api.users}/${params.id}`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${params.accessToken}`,
        },
      });
    }, rejectWithValue);
  }
);

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload.trim();

      state.emailError =
        state.email.length <= 3 || !state.email.includes('@')
          ? 'Некорректный email'
          : undefined;
    },
    setNewPassword: (state, action: PayloadAction<string>) => {
      state.newPassword = action.payload;

      state.passwordChangeError =
        state.newPassword === state.confirmPassword
          ? undefined
          : 'Пароли не совпадают';

      state.newPasswordError =
        state.newPassword.length < 7
          ? 'Пароль содержит менее 7 символов'
          : undefined;
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
      state.newPassword = '';
      state.confirmPassword = '';
    },
    clear: (state) => {
      state.success = false;
      delete state.error;
    },
  },
  extraReducers: {
    [updateSettings.pending as any]: (state) => {
      state.loading = 'pending';
      state.success = false;
      delete state.error;
    },
    [updateSettings.fulfilled as any]: (state) => {
      state.loading = 'idle';
      state.success = true;
    },
    [updateSettings.rejected as any]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = 'idle';
      state.error = action.payload;
    },
  },
});

export const {
  setEmail,
  setNewPassword,
  setConfirmPassword,
  togglePasswordChange,
  clearPasswordFields,
  clear,
} = settingsSlice.actions;

export const selectEmail = (state: RootState) => state.settings.email;
export const selectEmailError = (state: RootState) => state.settings.emailError;
export const selectNewPassword = (state: RootState) =>
  state.settings.newPassword;
export const selectNewPasswordError = (state: RootState) =>
  state.settings.newPasswordError;
export const selectConfirmPassword = (state: RootState) =>
  state.settings.confirmPassword;
export const selectIsPasswordChange = (state: RootState) =>
  state.settings.isPasswordChange;
export const selectPasswordChangeError = (state: RootState) =>
  state.settings.passwordChangeError;
export const selectSuccess = (state: RootState) => state.settings.success;
export const selectError = (state: RootState) => state.settings.error;

export default settingsSlice.reducer;
