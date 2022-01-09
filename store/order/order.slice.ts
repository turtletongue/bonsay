import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import initialState from './order.initial-state';

import { CreateOrderRequest } from './order.declarations';
import { RootState } from '..';
import { api } from '../../api';

export const createOrder = createAsyncThunk(
  'order/create',
  async (
    {
      accessToken,
      fullname,
      address: addressData,
      phone,
      cartItems,
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

      await axios.post(
        api.orders,
        {
          ...fullname,
          phone,
          purchases: cartItems.map((cartItem) => ({
            productId: cartItem.product.id,
            qty: cartItem.qty,
          })),
          addressId: address.id,
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
export const selectSuccess = (state: RootState) => state.order.success;

export default orderSlice.reducer;
