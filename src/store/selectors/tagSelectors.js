import { createSelector } from '@reduxjs/toolkit';

const _getTags = (state) => state.tags.tags;

export const selectTags = createSelector([_getTags], (tags) => Object.values(tags));

export const selectTagsForSelect = createSelector([_getTags], (tags) =>
  Object.keys(tags).map((tag) => ({ label: tag, value: tag })),
);

export const selectTagTextMaxSize = (state) => state.tags.tagTextMaxSize;
