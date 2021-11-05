import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
  todos: {},

  indexCounter: 0,

  editedTodo: null,
  deletedTodo: null,

  tagFilter: [],
  searchText: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.todos[state.indexCounter] = {
        id: state.indexCounter,
        ...payload,
      };
      state.indexCounter++;
    },
    startEdit(state, { payload }) {
      state.editedTodo = payload;
    },
    commitEdit(state, { payload }) {
      state.todos[payload.id] = {
        ...state.todos[payload.id],
        ...payload.todo,
      };
      state.editedTodo = null;
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
      const oldOrderNum = values.find((item) => {
        if (item.id === payload) {
          return item.order;
        }
      });
      const upperItemId = values.find((item) => {
        if (item.order === oldOrderNum - 1) {
          return item.id;
        }
      });
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
      const oldOrderNum = values.find((item) => {
        if (item.id === payload) {
          return item.order;
        }
      });
      const upperItemId = values.find((item) => {
        if (item.order === oldOrderNum + 1) {
          return item.id;
        }
      });
      Object.keys(state.todos).forEach((key) => {
        if (state.todos[key].id === payload) {
          state.todos[key].order = oldOrderNum + 1;
        }
        if (state.todos[key].id === upperItemId) {
          state.todos[key].order = oldOrderNum;
        }
      });
    },
    sortByCreatedDate(state) {
      const sortedValues = Object.values(state.todos).sort((a, b) =>
        dayjs(a.createdDatetime).diff(dayjs(b.createdDatetime)),
      );
      Object.keys(state.todos).forEach((key) => {
        state.todos[key].order = sortedValues.indexOf(state.todos[key]);
      });
    },
    sortByUpdatedDate(state) {
      const sortedValues = Object.values(state.todos).sort((a, b) =>
        dayjs(a.updatedDatetime).diff(dayjs(b.updatedDatetime)),
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
    clearSearchText() {
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
} = todoSlice.actions;
export default todoSlice.reducer;
