import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    '1': {
        name: 'Todo 1',
        desc: 'Desc of todo 1'
    },
    '2': {
        name: 'Todo 2',
        desc: 'Desc of todo 2'
    }
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {}
});

export default todoSlice.reducer;