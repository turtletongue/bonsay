import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import initialState from './settings.initial-state';
import { api } from '../../api';

import { RootState } from '..';
import { UpdateSettingsRequest } from './settings.declarations';

export const updateSettings = createAsyncThunk(
  'settings/updateSettings',
  async (params: UpdateSettingsRequest, { rejectWithValue }) => {
    try {
      await axios.patch(`${api.users}/${params.id}`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${params.accessToken}`,
        },
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
  setCurrentPassword,
  setNewPassword,
  setConfirmPassword,
  togglePasswordChange,
  clearPasswordFields,
  clear,
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
