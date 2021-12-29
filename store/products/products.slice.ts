import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState from './products.initial-state';
import { DEFAULT_FETCH_LIMIT } from './../../variables';

import { Product } from './products.declarations';
import { RootState } from '..';

export const fetchCatalog = createAsyncThunk(
  'products/fetchCatalog',
  async (page: number) => {
    // fetch server

    await new Promise((res) => setTimeout(res, 5000));

    return { data: [], $limit: DEFAULT_FETCH_LIMIT, $skip: 0 }; // return fetched data
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCatalog.pending as any]: ({ catalog }) => {
      catalog.loading = 'pending';
      catalog.error = undefined;
    },
    [fetchCatalog.fulfilled as any]: (
      { catalog },
      {
        payload: { data, $limit, $skip }
      }: PayloadAction<{ data: Product[]; $limit: number; $skip: number }>
    ) => {
      catalog.loading = 'idle';
      catalog.data = data;
      catalog.pagination = { $limit, $skip };
    },
    [fetchCatalog.rejected as any]: (
      { catalog },
      action: PayloadAction<string>
    ) => {
      catalog.loading = 'idle';
      catalog.error = action.payload;
    }
  }
});

export const selectIsCatalogLoading = (state: RootState) =>
  state.products.catalog.loading === 'pending';
export const selectCatalogProducts = (state: RootState) =>
  state.products.catalog.data;
export const selectCatalogPagination = (state: RootState) =>
  state.products.catalog.pagination;

export default productsSlice.reducer;
