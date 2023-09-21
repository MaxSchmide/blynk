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
    setInitComments: (state) => {
      state.data = JSON.parse(localStorage.getItem("comments") as string) || [];
    },
    addComment: (state, action) => {
      state.data.push(action.payload);

      localStorage.setItem("comments", JSON.stringify(state.data));
    },
  },
});

export const { addComment, setInitComments } = commentsSlice.actions;
