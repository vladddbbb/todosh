import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: {
        '1': {
            name: 'Todo 1',
            description: 'Desc of todo 1',
            createdDatetime: '',
            lastModifyDatetime: '',
            finishDatetime: '',
            isComplete: false,
            // tags: [],
            order: 1 //TODO: надо придумать че с ним делать))))
        },
        '2': {
            name: 'Todo 2',
            description: 'Desc of todo 2',
            createdDatetime: '',
            isFinished: false,
            tags: [],
            finishDatetime: '',
            order: 2
        }
    },

    editedTodo: null,
    deletedTodo: null,





    //todo: Отдельным слайсом
    refToTags: [
        {
            idTag: 'tag1',
            idTodo: 'todo1'
        }
    ]


};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        edit(state, action) {
        },
        delete(state, action) {
        }
    }
});

export default todoSlice.reducer;
