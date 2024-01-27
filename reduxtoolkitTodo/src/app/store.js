import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
export const store = configureStore({
  reducer: todoReducer,
});

// register reducers in store
