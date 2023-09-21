import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../../types/Item";
import { v4 as uuidv4 } from "uuid";
import { addComment } from "..";

type InitialState = {
  data: IItem[];
  selected: string | null;
};

const initialState: InitialState = {
  data: [],
  selected: null,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setInitItems: (state) => {
      state.data = JSON.parse(localStorage.getItem("items")!) || [];
      state.selected = JSON.parse(localStorage.getItem("selected")!) || null;
    },
    addItem: (state, action) => {
      const newItem = {
        id: uuidv4(),
        name: action.payload,
        count: 0,
      };

      if (state.data.length === 0) {
        state.selected = newItem.id;

        localStorage.setItem("selected", JSON.stringify(state.selected));
      }

      state.data.push(newItem);

      localStorage.setItem("items", JSON.stringify(state.data));
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);

      if (state.selected === action.payload) {
        state.selected = null;
      }

      localStorage.setItem("items", JSON.stringify(state.data));
    },
    selectItem: (state, action) => {
      state.selected = action.payload;

      localStorage.setItem("selected", JSON.stringify(state.selected));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addComment, (state) => {
      state.data = state.data.map((item) => {
        if (item.id === state.selected) {
          return {
            ...item,
            count: item.count + 1,
          };
        }

        return item;
      });

      localStorage.setItem("items", JSON.stringify(state.data));
    });
  },
});

export const { addItem, removeItem, selectItem, setInitItems } =
  itemsSlice.actions;
