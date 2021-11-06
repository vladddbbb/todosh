import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: {},
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
