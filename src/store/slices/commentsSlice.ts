import { createSlice } from "@reduxjs/toolkit";
import { IComment } from "../../types/Comment";

type InitialState = {
  data: IComment[];
};

const initialState: InitialState = {
  data: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addComment } = commentsSlice.actions;
