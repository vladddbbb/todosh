import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import todo from './todo';
import tags from './tag';
import refTagTodo from './refTagTodo';

const rootSlice = history => combineReducers({
    router: connectRouter(history),
    todo,
    tags,
    refTagTodo
});

export default rootSlice;
