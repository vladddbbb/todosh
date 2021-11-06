import { createSlice } from '@reduxjs/toolkit';
import { deleteTag } from './tag';
import { commitDelete } from './todo';

const initialState = [];

const refSlice = createSlice({
    name: 'refTagTodo',
    initialState,
    reducers: {
        addRef(state, {payload}) {
            state.push({
                tagId: payload.tagId,
                todoId: payload.todoId
            });
        },
        deleteAllRefsByTagId(state, {payload}) {
            return state.filter(item => item.tagId !== payload);
        },
        deleteAllRefsByTodoId(state, {payload}) {
            return state.filter(item => item.todoId !== payload);
        },
        deleteRef(state, {payload}) {
            return state.filter(item => !(item.tagId === payload.tagId && item.todoId === payload.todoId));
        }
    },
    extraReducers: {
        [deleteTag]: (state, { payload }) => {
            return state.filter(item => item.tagId !== payload);
        },
        [commitDelete]: (state, {payload}) => {
            return state.filter(item => item.todoId !== payload);
        }
    }
});

export const {addRef, deleteRef, deleteAllRefsByTagId, deleteAllRefsByTodoIs} = refSlice.actions;
export default refSlice.reducer;
