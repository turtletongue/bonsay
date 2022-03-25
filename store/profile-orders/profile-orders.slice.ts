import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { api } from '@app/api';
import { DEFAULT_FETCH_LIMIT } from '@app/variables';
import initialState from './profile-orders.initial-state';

import { RootState } from '@store/index';
import { Order } from '@app/declarations';
import { FindOrdersRequest } from './profile-orders.declarations';

export const fetchProfileOrders = createAsyncThunk(
  'profileOrders/fetchProfileOrders',
  async ({ accessToken, page }: FindOrdersRequest) => {
    const orders: { total: number; data: Order[] } = (
      await axios.get(api.orders, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          $skip: page * DEFAULT_FETCH_LIMIT - DEFAULT_FETCH_LIMIT,
          $order: {
            createdAt: 'DESC',
          },
        },
      })
    ).data;

    return {
      total: orders.total,
      orders: orders.data,
    };
  }
);

export const profileOrdersSlice = createSlice({
  name: 'profileOrders',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchProfileOrders.pending as any]: (state) => {
      state.loading = 'pending';
      state.success = false;
      delete state.error;
    },
    [fetchProfileOrders.fulfilled as any]: (
      state,
      {
        payload: { total, orders },
      }: PayloadAction<{ total: number; orders: Order[] }>
    ) => {
      state.loading = 'idle';
      state.success = true;
      state.orders = orders;
      state.total = total;
    },
    [fetchProfileOrders.rejected as any]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = 'idle';
      state.error = action.payload;
    },
  },
});

export const { setPage } = profileOrdersSlice.actions;

export const selectOrders = (state: RootState) => state.profileOrders.orders;
export const selectPage = (state: RootState) => state.profileOrders.page;
export const selectTotal = (state: RootState) => state.profileOrders.total;
export const selectIsLoading = (state: RootState) =>
  state.profileOrders.loading !== 'idle';

export default profileOrdersSlice.reducer;
