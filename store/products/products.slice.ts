import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState from './products.initial-state';

import { Product } from '../../declarations';
import { RootState } from '..';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (page: number) => {
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
        price: 750,
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

    return { total: 51, products };
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
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

export const selectIsLoading = (state: RootState) =>
  state.products.loading === 'pending';
export const selectProducts = (state: RootState) => state.products.data;
export const selectTotal = (state: RootState) => state.products.total;

export default productsSlice.reducer;
