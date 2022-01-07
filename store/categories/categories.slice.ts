import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import initialState from './categories.initial-state';
import { api } from '../../api';

import { Category } from '../../declarations';
import { RootState } from '..';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const categories: { data: Category[] } = (await axios.get(api.categories))
      .data;

    return categories.data;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending as any]: (state) => {
      state.loading = 'pending';
      state.error = undefined;
    },
    [fetchCategories.fulfilled as any]: (
      state,
      action: PayloadAction<Category[]>
    ) => {
      state.loading = 'idle';
      state.data = action.payload;
    },
    [fetchCategories.rejected as any]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = 'idle';
      state.error = action.payload;
    },
  },
});

export const selectCategories = (state: RootState) => state.categories.data;
export const selectIsLoading = (state: RootState) =>
  state.categories.loading !== 'idle';

export default categoriesSlice.reducer;
