import { createSelector } from '@reduxjs/toolkit';

export const selectTags = createSelector(
    state => state.tags.tags,
    tags => Object.values(tags)
);

export const selectTagTextMaxSize = state => state.tags.tagTextMaxSize;
