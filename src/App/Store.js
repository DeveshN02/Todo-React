import { configureStore } from "@reduxjs/toolkit";
import reducertodo from "../features/todo/todoSlice";

// configure store and add the reducer that create on slice
export const store = configureStore({
  reducer: reducertodo,
});
