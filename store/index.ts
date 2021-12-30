import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import coreReducer from './core/core.slice';
import productsReducer from './products/products.slice';
import categoriesReducer from './categories/categories.slice';

export const store = configureStore({
  reducer: {
    core: coreReducer,
    products: productsReducer,
    categories: categoriesReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
