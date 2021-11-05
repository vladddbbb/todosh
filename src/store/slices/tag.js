import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: {
    tag1: 'tag1',
    tag2: 'tag2',
    tag3: 'tag3',
  },
  tagTextMaxSize: 50,
};

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag({ tags }, { payload }) {
      tags[payload] = payload;
    },
    deleteTag({ tags }, { payload }) {
      delete tags[payload];
    },
  },
});

export const { addTag, deleteTag } = tagSlice.actions;
export default tagSlice.reducer;
