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

import coreReducer from '@store/core/core.slice';
import productsReducer from '@store/products/products.slice';
import categoriesReducer from '@store/categories/categories.slice';
import cartReducer from '@store/cart/cart.slice';
import settingsReducer from '@store/settings/settings.slice';
import orderReducer from '@store/order/order.slice';
import signUpReducer from '@store/sign-up/sign-up.slice';
import signInReducer from '@store/sign-in/sign-in.slice';
import persistStorage from './persistStorage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: persistStorage,
  blacklist: ['settings', 'products', 'categories', 'signIn', 'signUp'],
};

const rootReducer = combineReducers({
  core: coreReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  settings: settingsReducer,
  order: orderReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
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
