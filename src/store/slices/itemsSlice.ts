import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../../types/Item";
import { v4 as uuidv4 } from "uuid";

type InitialState = {
  items: IItem[];
  selected: string | null;
};

const initialState: InitialState = {
  items: [],
  selected: null,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: uuidv4(),
        name: action.payload,
        count: 0,
      };

      if (state.items.length === 0) {
        state.selected = newItem.id;
      }

      state.items.push(newItem);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      if (state.selected === action.payload) {
        state.selected = null;
      }
    },
    selectItem: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { addItem } = itemsSlice.actions;
