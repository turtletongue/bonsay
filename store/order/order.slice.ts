import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState from './order.initial-state';

import { RootState } from '..';

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
    }
  }
});

export const {
  setFirstname,
  setLastname,
  setCity,
  setStreet,
  setHouse,
  setPostcode,
  setPhone
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

export default orderSlice.reducer;
