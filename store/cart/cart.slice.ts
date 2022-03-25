import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { api } from '@app/api';
import initialState from './cart.initial-state';

import { RootState } from '@store/index';
import { Id, Product } from '@app/declarations';

export const removeUnavailableProducts = createAsyncThunk(
  'cart/removeUnavailableProducts',
  async (productsIds: Id[], { dispatch }) => {
    const existingProductsIds: Id[] = (
      await axios.get(api.products, {
        params: {
          $limit: productsIds.length,
          id: {
            $in: productsIds,
          },
          isAvailable: true,
          isDeleted: false,
        },
      })
    ).data.data?.map((product: Product) => String(product.id));

    productsIds.forEach((productId) => {
      if (!existingProductsIds.includes(String(productId))) {
        dispatch(removeFromCart(productId));
      }
    });
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const existingCartItem = state.items[product.id];

      if (existingCartItem) {
        return;
      }

      state.items[product.id] = { product };
    },
    removeFromCart: (state, action: PayloadAction<Id>) => {
      delete state.items[action.payload];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addProductToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) =>
  Object.values(state.cart.items);
export const selectProductsIds = (state: RootState) =>
  Object.keys(state.cart.items);
export const selectTotal = (state: RootState) =>
  Object.values(state.cart.items).reduce(
    (acc, item) => acc + +item.product.price,
    0
  );
export const selectCartItemsCount = (state: RootState) =>
  Object.values(state.cart.items).length;

export default cartSlice.reducer;
