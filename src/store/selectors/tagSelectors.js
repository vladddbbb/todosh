import { createSelector } from '@reduxjs/toolkit';

const _getTags = (state) => state.tags.tags;

export const selectTags = createSelector([_getTags], (tags) => Object.values(tags));

export const selectTagsForSelect = createSelector(
    [_getTags, (_, attachedTags) => attachedTags],
    (tags, attachedTags) => {
        return Object.keys(tags).filter(tag => !attachedTags.includes(tag)).map((tag) => ({ label: tag, value: tag }))
    },
);

export const selectTagTextMaxSize = (state) => state.tags.tagTextMaxSize;

export const selectTagsByTodoId = createSelector(
    state => state.refTagTodo,
    (_, todoId) => todoId,
    (refs, todoId) => {
        return refs.filter(ref => ref.todoId === todoId).map(ref => ref.tagId);
    }
);
