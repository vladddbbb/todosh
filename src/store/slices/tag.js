import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
    tags: {}, //{{tag1 : 'tag1'}, {tag2:'tag2'}}
    maxSize: 100,
};

const tagSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        addTag({ tags }, { payload }) {
            tags[payload] = payload;
        },
        deleteTag({tags}, { payload }) {
            delete tags[payload];
        }
    }
});

export const selectTags = createSelector(state => Object.values(state.tags.tags));


export const { addTag, deleteTag } = tagSlice.actions;
export default tagSlice.reducer;
