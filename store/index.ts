import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import persistStorage from './persistStorage';
import coreReducer from './core/core.slice';
import productsReducer from './products/products.slice';
import categoriesReducer from './categories/categories.slice';
import cartReducer from './cart/cart.slice';
import settingsReducer from './settings/settings.slice';
import orderReducer from './order/order.slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: persistStorage,
  blacklist: ['settings', 'products', 'categories'],
};

const rootReducer = combineReducers({
  core: coreReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  settings: settingsReducer,
  order: orderReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
