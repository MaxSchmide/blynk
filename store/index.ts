import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { itemsSlice } from "./slices/itemsSlice";
import { commentsSlice } from "./slices/commentsSlice";

const store = configureStore({
  reducer: {
    [itemsSlice.name]: itemsSlice.reducer,
    [commentsSlice.name]: commentsSlice.reducer,
  },
});

export default store;

export * from "./slices/itemsSlice";
export * from "./slices/commentsSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
