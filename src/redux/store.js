import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/contentSlice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});