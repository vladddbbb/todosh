import { createSelector } from '@reduxjs/toolkit';

const sort = (todoArr) => {
  return todoArr.sort((a, b) => a.order - b.order);
};

export const selectFilteredTodos = createSelector(
  (state) => state.todo.todos,
  (state) => state.todo.tagFilter,
  (state) => state.todo.searchText,
  (state) => state.todo.isOnlyUnfinished,
  (state) => state.refTagTodo,
  (todos, tagFilter, searchText, isOnlyUnfinished, refs) => {
    let filteredTodos = Object.values(todos);
    if (tagFilter.length && refs.length) {
      filteredTodos = [];
      const keys = Object.keys(todos);
      keys.forEach((key) => {
        const connectedTags = refs
          .filter((ref) => ref.todoId === todos[key].id)
          .map((ref) => ref.tagId);
        if (tagFilter.every((item) => connectedTags.includes(item))) {
          filteredTodos.push(todos[key]);
        }
      });
    }
    if (isOnlyUnfinished) {
      filteredTodos = filteredTodos.filter((item) => item.isComplete);
    }
    if (searchText) {
      filteredTodos = filteredTodos.filter(
        (item) =>
          item.name?.toLowerCase().includes(searchText.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchText.toLowerCase()),
      );
    }
    return sort(filteredTodos);
  },
);

export const selectSearchText = (state) => state.todo.searchText;
export const selectEditedTodo = (state) => state.todo.editedTodo;
export const selectDeletedTodo = (state) => state.todo.deletedTodo;
export const selectTagFilter = (state) => state.todo.tagFilter;
export const selectLastId = (state) => state.todo.indexCounter;

export const selectIsEditedTodo = (id) => (state) => selectEditedTodo(state) === id;
