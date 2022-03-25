import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { api } from '@app/api';
import initialState from './order.initial-state';

import { RootState } from '@store/index';
import { CreateOrderRequest } from './order.declarations';

export const createOrder = createAsyncThunk(
  'order/create',
  async (
    {
      accessToken,
      fullname,
      address: addressData,
      phone,
      cartItems,
      token,
      total,
    }: CreateOrderRequest,
    { rejectWithValue }
  ) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      const { data: address } = await axios.post(api.addresses, addressData, {
        headers,
      });

      const { data: order } = await axios.post(
        api.orders,
        {
          ...fullname,
          phone,
          purchases: cartItems.map((cartItem) => ({
            productId: cartItem.product.id,
          })),
          addressId: address.id,
        },
        { headers }
      );

      await axios.post(
        api.payments,
        {
          orderId: order.id,
          tokenId: token.id,
          sum: total,
        },
        { headers }
      );
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setFirstname: (state, action: PayloadAction<string>) => {
      state.fullname.firstname = action.payload;
    },
    setLastname: (state, action: PayloadAction<string>) => {
      state.fullname.lastname = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.address.city = action.payload;
    },
    setStreet: (state, action: PayloadAction<string>) => {
      state.address.street = action.payload;
    },
    setHouse: (state, action: PayloadAction<string>) => {
      state.address.house = action.payload;
    },
    setPostcode: (state, action: PayloadAction<string>) => {
      state.address.postcode = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    removeError: (state) => {
      delete state.error;
    },
    clear: (state) => {
      state.success = false;
      delete state.error;
      state.fullname = { firstname: '', lastname: '' };
      state.address = { city: '', street: '', house: '', postcode: '' };
      state.phone = '';
    },
  },
  extraReducers: {
    [createOrder.pending as any]: (state) => {
      state.loading = 'pending';
      delete state.error;
    },
    [createOrder.fulfilled as any]: (state) => {
      state.loading = 'idle';
      state.success = true;
    },
    [createOrder.rejected as any]: (state, action: PayloadAction<string>) => {
      state.loading = 'idle';
      state.error = action.payload;
    },
  },
});

export const {
  setFirstname,
  setLastname,
  setCity,
  setStreet,
  setHouse,
  setPostcode,
  setPhone,
  removeError,
  clear,
} = orderSlice.actions;

export const selectFirstname = (state: RootState) =>
  state.order.fullname.firstname;
export const selectLastname = (state: RootState) =>
  state.order.fullname.lastname;
export const selectCity = (state: RootState) => state.order.address.city;
export const selectStreet = (state: RootState) => state.order.address.street;
export const selectHouse = (state: RootState) => state.order.address.house;
export const selectPostcode = (state: RootState) =>
  state.order.address.postcode;
export const selectPhone = (state: RootState) => state.order.phone;
export const selectIsLoading = (state: RootState) =>
  state.order.loading !== 'idle';
export const selectSuccess = (state: RootState) => state.order.success;
export const selectError = (state: RootState) => state.order.error;

export default orderSlice.reducer;
