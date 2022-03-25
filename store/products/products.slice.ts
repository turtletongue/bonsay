import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { api } from '@app/api';
import { DEFAULT_FETCH_LIMIT, sortTypes } from '@app/variables';
import initialState from './products.initial-state';

import { RootState } from '@store/index';
import { Id, Product } from '@app/declarations';
import { FetchProductsParams } from './products.declarations';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({
    page,
    filters: { price, age, categories, sortId, search },
  }: FetchProductsParams) => {
    const minBirthdate = new Date();
    minBirthdate.setFullYear(minBirthdate.getFullYear() - age.max);

    const maxBirthdate = new Date();
    maxBirthdate.setFullYear(maxBirthdate.getFullYear() - age.min);

    const products: { total: number; data: Product[] } = (
      await axios.get(api.products, {
        params: {
          $skip: page * DEFAULT_FETCH_LIMIT - DEFAULT_FETCH_LIMIT,
          $order: sortTypes.find((type) => String(type.id) === sortId)?.order,
          price: {
            $btw: [price.min, price.max],
          },
          birthdate: {
            $btw: [minBirthdate, maxBirthdate],
          },
          categoryId: {
            $in: Object.keys(categories),
          },
          name: {
            $iLike: `%${search}%`,
          },
          isAvailable: true,
          isDeleted: false,
        },
      })
    ).data;

    return {
      total: products.total,
      products: products.data.map((product) =>
        product.upload
          ? { ...product, path: product.upload.internalPath }
          : product
      ),
    };
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setMinimumPrice: (state, action: PayloadAction<number>) => {
      state.filters.price.min = action.payload;
    },
    setMaximumPrice: (state, action: PayloadAction<number>) => {
      state.filters.price.max = action.payload;
    },
    setMinimumAge: (state, action: PayloadAction<number>) => {
      state.filters.age.min = action.payload;
    },
    setMaximumAge: (state, action: PayloadAction<number>) => {
      state.filters.age.max = action.payload;
    },
    addCategory: (state, action: PayloadAction<Id>) => {
      state.filters.categories[action.payload] = true;
      state.filters.isFilterByOneCategory = false;
    },
    removeCategory: (state, action: PayloadAction<Id>) => {
      delete state.filters.categories[action.payload];
      state.filters.isFilterByOneCategory = false;
    },
    sortByOneCategory: (state, action: PayloadAction<Id>) => {
      state.filters.categories = {
        [action.payload.toString()]: true,
      };
      state.filters.isFilterByOneCategory = true;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    setSortId: (state, action: PayloadAction<Id | undefined>) => {
      state.filters.sortId = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending as any]: (state) => {
      state.loading = 'pending';
      state.error = undefined;
    },
    [fetchProducts.fulfilled as any]: (
      state,
      {
        payload: { products, total },
      }: PayloadAction<{ total: number; products: Product[] }>
    ) => {
      state.loading = 'idle';
      state.data = products;
      state.total = total;
    },
    [fetchProducts.rejected as any]: (state, action: PayloadAction<string>) => {
      state.loading = 'idle';
      state.error = action.payload;
    },
  },
});

export const {
  setMinimumPrice,
  setMaximumPrice,
  setMinimumAge,
  setMaximumAge,
  addCategory,
  removeCategory,
  sortByOneCategory,
  setSearch,
  setSortId,
  setPage,
} = productsSlice.actions;

export const selectIsLoading = (state: RootState) =>
  state.products.loading === 'pending';
export const selectProducts = (state: RootState) => state.products.data;
export const selectTotal = (state: RootState) => state.products.total;
export const selectMinimumPrice = (state: RootState) =>
  state.products.filters.price.min;
export const selectMaximumPrice = (state: RootState) =>
  state.products.filters.price.max;
export const selectMinimumAge = (state: RootState) =>
  state.products.filters.age.min;
export const selectMaximumAge = (state: RootState) =>
  state.products.filters.age.max;
export const selectFilterCategories = (state: RootState) =>
  Object.keys(state.products.filters.categories);
export const selectIsFilterByOneCategory = (state: RootState) =>
  state.products.filters.isFilterByOneCategory;
export const selectSearch = (state: RootState) => state.products.filters.search;
export const selectSortId = (state: RootState) => state.products.filters.sortId;
export const selectFilters = (state: RootState) => state.products.filters;
export const selectPage = (state: RootState) => state.products.page;

export default productsSlice.reducer;
