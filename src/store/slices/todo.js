import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    '1': {
        name: 'Todo 1',
        description: 'Desc of todo 1',
        createdDatetime: '',
        isFinished: false,
        tags: [],
        finishDatetime: '',
        order: 1 //TODO: надо придумать че с ним делать))))
    },
    '2': {
        name: 'Todo 2',
        description: 'Desc of todo 2',
        createdDatetime: '',
        isFinished: false,
        tags: [],
        finishDatetime: '',
    }
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {}
});

export default todoSlice.reducer;
