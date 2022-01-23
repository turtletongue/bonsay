import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import initialState from './cart.initial-state';
import { api } from '../../api';

import { Id, Product } from '../../declarations';
import { RootState } from '..';

export const removeDeletedProducts = createAsyncThunk(
  'cart/removeDeletedProducts',
  async (productsIds: Id[], { dispatch }) => {
    const existingProductsIds: Id[] = (
      await axios.get(api.products, {
        params: {
          $limit: productsIds.length,
          id: {
            $in: productsIds,
          },
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
    increaseProductQty: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const existingCartItem = state.items[product.id];

      if (existingCartItem) {
        existingCartItem.qty++;
      } else {
        state.items[product.id] = { product, qty: 1 };
      }
    },
    decreaseProductQty: (state, action: PayloadAction<Id>) => {
      const productId = action.payload;

      const existingCartItem = state.items[productId];

      if (existingCartItem && --existingCartItem.qty === 0) {
        delete state.items[productId];
      }
    },
    removeFromCart: (state, action: PayloadAction<Id>) => {
      delete state.items[action.payload];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const {
  increaseProductQty,
  decreaseProductQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) =>
  Object.values(state.cart.items);
export const selectProductsIds = (state: RootState) =>
  Object.keys(state.cart.items);
export const selectTotal = (state: RootState) =>
  Object.values(state.cart.items).reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );
export const selectCartItemsCount = (state: RootState) =>
  Object.values(state.cart.items).length;

export default cartSlice.reducer;
