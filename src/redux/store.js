import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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

import { authReducer } from './auth/authReducers';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
 ];

const authPersistConfig = { key: 'token', storage, whitelist: ['token'] };

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  
  },
  middleware,
});

export const persistor = persistStore(store);
export default store;
