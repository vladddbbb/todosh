import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
    todos: {
        '0': {
            id: 0,
            name: 'Todo 1',
            description: 'Desc of todo 1',
            createdDatetime: '',
            updatedDatetime: '',
            finishDatetime: '',
            isComplete: false,
            order: 0,
        },
        '1': {
            id: 1,
            name: 'Todo 2',
            description: 'Desc of todo 2',
            createdDatetime: '',
            isFinished: false,
            tags: [],
            finishDatetime: ''
        },
        '2': {
            id: 2,
            name: 'Todo 3',
            description: 'Desc of todo 3',
            createdDatetime: '',
            isFinished: false,
            tags: [],
            finishDatetime: ''
        },
        '3': {
            id: 3,
            name: 'Todo 4',
            description: 'Desc of todo 3',
            createdDatetime: '',
            isFinished: false,
            tags: [],
            finishDatetime: ''
        }
    },

    indexCounter: 0,

    editedTodo: null,
    deletedTodo: null,

    tagFilter: [],
    searchText: null,
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo({ todos, indexCounter }, { payload }) {
            todos[indexCounter] = payload;
            indexCounter++;
        },
        startEdit({ editedTodo }, { payload }) {
            editedTodo = payload;
        },
        commitEdit({ todos, editedTodo }, { payload }) {
            todos[payload.id] = payload.todo;
            editedTodo = null;
        },
        startDelete({ deletedTodo }, { payload }) {
            deletedTodo = payload;
        },
        commitDelete({ todos, deletedTodo }, { payload }) {
            delete todos[payload.id];
            deletedTodo = null;
        },
        moveUp({todos}, {payload}) {
            const values = Object.values(todos);
            const oldOrderNum = values.find(item => {
                if (item.id === payload) {
                    return item.order;
                }
            });
            const upperItemId = values.find(item => {
                if (item.order === oldOrderNum - 1) {
                    return item.id;
                }
            });
            Object.keys(todos).forEach(key => {
                if (todos[key].id === payload) {
                    todos[key].order = oldOrderNum - 1;
                }
                if (todos[key].id === upperItemId) {
                    todos[key].order = oldOrderNum;
                }
            });
        },
        moveDown({todos}, {payload}) {
            const values = Object.values(todos);
            const oldOrderNum = values.find(item => {
                if (item.id === payload) {
                    return item.order;
                }
            });
            const upperItemId = values.find(item => {
                if (item.order === oldOrderNum + 1) {
                    return item.id;
                }
            });
            Object.keys(todos).forEach(key => {
                if (todos[key].id === payload) {
                    todos[key].order = oldOrderNum + 1;
                }
                if (todos[key].id === upperItemId) {
                    todos[key].order = oldOrderNum;
                }
            });
        },
        sortByCreatedDate({todos}){
            const sortedValues = Object.values(todos).sort((a, b) => dayjs(a.createdDatetime).diff(dayjs(b.createdDatetime)));
            Object.keys(todos).forEach(key => {
                todos[key].order = sortedValues.indexOf(todos[key]);
            });
        },
        sortByUpdatedDate({todos}){
            const sortedValues = Object.values(todos).sort((a, b) => dayjs(a.updatedDatetime).diff(dayjs(b.updatedDatetime)));
            Object.keys(todos).forEach(key => {
                todos[key].order = sortedValues.indexOf(todos[key]);
            });
        },
        toggleComplete({ todos }, {payload}) {
            todos[payload].isComplete = !todos[payload].isComplete;
        },
        setSearchText({searchText}, {payload}) {
            searchText = payload;
        }
    }
});

const sort = todoArr => {
    return todoArr.sort((a, b) => a.order - b.order);
}

export const selectFilteredTodos = createSelector(
    state => state.todo.todos,
    state => state.todo.tagFilter,
    state => state.todo.searchText,
    state => state.refTagTodo,
    (todos, tagFilter, searchText, refs) => {
        console.log(todos, tagFilter);
        let filteredTodos = Object.values(todos);
        if (tagFilter.length && refs.length) {
            const keys = Object.keys(todos);
            keys.forEach(key => {
                const connectedTags = refs.filter(ref => ref.todoId === todos[key].id).map(ref => ref.tagId);
                if (tagFilter.every(item => connectedTags.includes(item))) {
                    filteredTodos.push(todos[key]);
                }
            });
        }
        if (searchText) {
            filteredTodos = filteredTodos.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.description.toLowerCase().includes(searchText.toLowerCase()));
        }
        return sort(filteredTodos);
    }
);

export default todoSlice.reducer;
