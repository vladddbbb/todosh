import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const refSlice = createSlice({
    name: 'refTagTodo',
    initialState,
    reducers: {
        addRef(state, {payload}) {
            state.push({
                tagId: payload.tagId,
                todoId: payload.todoId
            })
        },
        deleteAllRefsByTagId(state, {payload}) {
            const newState = state.filter(item => item.tagId !== payload);
            state = [...newState];
        },
        deleteAllRefsByTodoId(state, {payload}) {
            const newState = state.filter(item => item.todoId !== payload);
            state = [...newState];
        },
        deleteRef(state, {payload}) {
            const newState = state.filter(item => item.tagId !== payload.tagId && item.todoId !== payload.todoId);
            state = [...newState];
        }
    }
});

export const {addRef, deleteRef, deleteAllRefsByTagId, deleteAllRefsByTodoIs} = refSlice.actions;
export default refSlice.reducer;
