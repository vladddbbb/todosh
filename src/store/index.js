import { configureStore } from '@reduxjs/toolkit';

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

import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';

import createRootReducer from './slices/root';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['refTagTodo', 'tags'],
};

export const history = createHashHistory();

const withHistoryReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, withHistoryReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(routerMiddleware(history)),
});

export const persistor = persistStore(store);
export default store;
