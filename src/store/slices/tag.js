import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tags: {}, //todo: {"name" : 'name'}
    maxSize: 100,
};

const tagSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        addTag({ tags, size }, action) {
            tags[size] = action.payload;
            size++;
        },
        deleteTag({tags, size}, action) {
            delete tags[action.payload];
            size--;
        }
    }
});


export const { addTag, deleteTag } = tagSlice.actions;
export default tagSlice.reducer;
