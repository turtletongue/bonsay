import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { api } from '@app/api';
import initialState from './categories.initial-state';

import { RootState } from '@store/index';
import { Category } from '@app/declarations';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const categories: { data: Category[] } = (
      await axios.get(api.categories, {
        params: {
          isDeleted: false,
          disablePagination: true,
        },
      })
    ).data;

    return categories.data.map((category) =>
      category.upload
        ? { ...category, path: category.upload.internalPath }
        : category
    );
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
