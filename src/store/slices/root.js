import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import todo from './todo';

const rootSlice = history => combineReducers({
   router: connectRouter(history),
   todo 
});

export default rootSlice;