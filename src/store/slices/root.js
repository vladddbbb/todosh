import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import todo from './todo';
import tags from './tag';

const rootSlice = history => combineReducers({
    router: connectRouter(history),
    todo,
    tags
});

export default rootSlice;
