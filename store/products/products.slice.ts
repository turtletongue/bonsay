import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState from './products.initial-state';

import { Id, Product } from '../../declarations';
import { FetchProductsParams } from './products.declarations';
import { RootState } from '..';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params: FetchProductsParams) => {
    const products: Product[] = [
      {
        id: 1,
        name: 'MONDAY PINE',
        price: 750,
        description: '',
        createdAt: '2020-12-20',
        updatedAt: '2020-12-20',
        age: 30,
        height: 34,
        upload: { path: '/images/product.jpg' }
      },
      {
        id: 2,
        name: 'MONDAY PINE',
        price: 750000,
        description: '',
        createdAt: '2020-12-20',
        updatedAt: '2020-12-20',
        age: 30,
        height: 34,
        upload: { path: '/images/product.jpg' }
      },
      {
        id: 3,
        name: 'MONDAY PINE',
        price: 750,
        description: '',
        createdAt: '2020-12-20',
        updatedAt: '2020-12-20',
        age: 30,
        height: 34,
        upload: { path: '/images/product.jpg' }
      },
      {
        id: 4,
        name: 'MONDAY PINE',
        price: 750,
        description: '',
        createdAt: '2020-12-20',
        updatedAt: '2020-12-20',
        age: 30,
        height: 34,
        upload: { path: '/images/product.jpg' }
      },
      {
        id: 5,
        name: 'MONDAY PINE',
        price: 750,
        description: '',
        createdAt: '2020-12-20',
        updatedAt: '2020-12-20',
        age: 30,
        height: 34,
        upload: { path: '/images/product.jpg' }
      },
      {
        id: 6,
        name: 'MONDAY PINE',
        price: 750,
        description: '',
        createdAt: '2020-12-20',
        updatedAt: '2020-12-20',
        age: 30,
        height: 34,
        upload: { path: '/images/product.jpg' }
      },
      {
        id: 7,
        name: 'MONDAY PINE',
        price: 750,
        description: '',
        createdAt: '2020-12-20',
        updatedAt: '2020-12-20',
        age: 30,
        height: 34,
        upload: { path: '/images/product.jpg' }
      },
      {
        id: 8,
        name: 'MONDAY PINE',
        price: 750,
        description: '',
        createdAt: '2020-12-20',
        updatedAt: '2020-12-20',
        age: 30,
        height: 34,
        upload: { path: '/images/product.jpg' }
      }
    ]; //server fetching

    return {
      total: 51,
      products: products
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
    },
    removeCategory: (state, action: PayloadAction<Id>) => {
      delete state.filters.categories[action.payload];
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    setSortId: (state, action: PayloadAction<Id | undefined>) => {
      state.filters.sortId = action.payload;
    }
  },
  extraReducers: {
    [fetchProducts.pending as any]: (state) => {
      state.loading = 'pending';
      state.error = undefined;
    },
    [fetchProducts.fulfilled as any]: (
      state,
      {
        payload: { products, total }
      }: PayloadAction<{ total: number; products: Product[] }>
    ) => {
      state.loading = 'idle';
      state.data = products;
      state.total = total;
    },
    [fetchProducts.rejected as any]: (state, action: PayloadAction<string>) => {
      state.loading = 'idle';
      state.error = action.payload;
    }
  }
});

export const {
  setMinimumPrice,
  setMaximumPrice,
  setMinimumAge,
  setMaximumAge,
  addCategory,
  removeCategory,
  setSearch,
  setSortId
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
export const selectSearch = (state: RootState) => state.products.filters.search;
export const selectSortId = (state: RootState) => state.products.filters.sortId;
export const selectFilters = (state: RootState) => state.products.filters;

export default productsSlice.reducer;
