import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const persistTodosConfig = {
  key: 'todo',
  storage,
  whitelist: ['todos', 'indexCounter'],
};

const initialState = {
  todos: {},

  indexCounter: 0,

  editedTodo: null,
  deletedTodo: null,

  tagFilter: [],
  searchText: '',
  sortFilter: null,
  isOnlyUnfinished: false,
};

const now = () => moment().format('YYYY-MM-DD HH:mm:ss');

const reorderItems = (todos, sortFilter) => {
  const sortedValues = Object.values(todos).sort((a, b) => {
    if (sortFilter === 'created') {
      return moment(b.createdDatetime).diff(moment(a.createdDatetime));
    } else {
      return moment(b.updatedDatetime).diff(moment(a.updatedDatetime));
    }
  });

  Object.keys(todos).forEach((key) => {
    todos[key].order = sortedValues.indexOf(todos[key]);
  });
  return todos;
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.todos[state.indexCounter] = {
        id: state.indexCounter,
        order: state.indexCounter,
        createdDatetime: now(),
        updatedDatetime: now(),
        ...payload,
      };
      state.indexCounter++;
      if (state.sortFilter) {
        state.todos = reorderItems(state.todos, state.sortFilter);
      }
    },
    startEdit(state, { payload }) {
      state.editedTodo = payload;
    },
    commitEdit(state, { payload }) {
      state.todos[payload.id] = {
        ...state.todos[payload.id],
        ...payload.todo,
        updatedDatetime: now(),
      };
      state.editedTodo = null;
      if (state.sortFilter) {
        state.todos = reorderItems(state.todos, state.sortFilter);
      }
    },
    cancelEdit(state) {
      state.editedTodo = null;
    },
    startDelete(state, { payload }) {
      state.deletedTodo = payload;
    },
    commitDelete(state, { payload }) {
      delete state.todos[payload];
      state.deletedTodo = null;
    },
    cancelDelete(state) {
      state.deletedTodo = null;
    },
    moveUp(state, { payload }) {
      const values = Object.values(state.todos);
      const oldOrderNum = values.find((item) => item.id === payload).order;
      if (oldOrderNum === 0) {
        return;
      }
      state.sortFilter = null;
      const upperItemId = values.find((item) => item.order === oldOrderNum - 1).id;
      Object.keys(state.todos).forEach((key) => {
        if (state.todos[key].id === payload) {
          state.todos[key].order = oldOrderNum - 1;
        }
        if (state.todos[key].id === upperItemId) {
          state.todos[key].order = oldOrderNum;
        }
      });
    },
    moveDown(state, { payload }) {
      const values = Object.values(state.todos);
      const oldOrderNum = values.find((item) => item.id === payload).order;
      if (oldOrderNum === state.indexCounter - 1) {
        return;
      }
      state.sortFilter = null;
      const lowerItemId = values.find((item) => item.order === oldOrderNum + 1).id;
      Object.keys(state.todos).forEach((key) => {
        if (state.todos[key].id === payload) {
          state.todos[key].order = oldOrderNum + 1;
        }
        if (state.todos[key].id === lowerItemId) {
          state.todos[key].order = oldOrderNum;
        }
      });
    },
    sortByCreatedDate(state) {
      const sortedValues = Object.values(state.todos).sort((a, b) =>
        moment(b.createdDatetime).diff(moment(a.createdDatetime)),
      );
      Object.keys(state.todos).forEach((key) => {
        state.todos[key].order = sortedValues.indexOf(state.todos[key]);
      });
    },
    sortByUpdatedDate(state) {
      const sortedValues = Object.values(state.todos).sort((a, b) =>
        moment(b.updatedDatetime).diff(moment(a.updatedDatetime)),
      );
      Object.keys(state.todos).forEach((key) => {
        state.todos[key].order = sortedValues.indexOf(state.todos[key]);
      });
    },
    toggleComplete(state, { payload }) {
      state.todos[payload].isComplete = !state.todos[payload].isComplete;
    },
    setSearchText(state, { payload }) {
      state.searchText = payload;
    },
    clearSearchText(state) {
      state.searchText = null;
    },
    addTagFilter(state, { payload }) {
      state.tagFilter.push(payload);
    },
    removeTagFilter(state, { payload }) {
      state.tagFilter = state.tagFilter.filter((item) => item !== payload);
    },
    clearTagFilter(state) {
      state.tagFilter = [];
    },
    setSortFilter(state, { payload }) {
      state.sortFilter = payload;
    },
    toggleIsOnlyUnfinished(state) {
      state.isOnlyUnfinished = !state.isOnlyUnfinished;
    },
  },
});

export const {
  addTodo,
  startEdit,
  commitEdit,
  cancelEdit,
  startDelete,
  commitDelete,
  cancelDelete,
  moveUp,
  moveDown,
  sortByCreatedDate,
  sortByUpdatedDate,
  toggleComplete,
  setSearchText,
  clearSearchText,
  addTagFilter,
  removeTagFilter,
  clearTagFilter,
  setSortFilter,
  toggleIsOnlyUnfinished,
} = todoSlice.actions;

export default persistReducer(persistTodosConfig, todoSlice.reducer);
