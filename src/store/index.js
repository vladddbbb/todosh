import { configureStore } from '@reduxjs/toolkit';

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import createRootReducer from './slices/root';

export const history = createBrowserHistory();

export default configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
});
