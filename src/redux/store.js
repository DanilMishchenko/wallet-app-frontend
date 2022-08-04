import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { globalSlice } from './global/globalSlice';
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
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/authSlice.js';
import { transactionsSlice } from './transactions/transactions-reducers';
import { currencySlice } from './currency/currency-reducer';
import { balanceSlice } from './balance/balance-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(authPersistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    global: globalSlice.reducer,
    currency: currencySlice.reducer,
    transactions: transactionsSlice.reducer,
    balance: balanceSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});
export const persistor = persistStore(store);
