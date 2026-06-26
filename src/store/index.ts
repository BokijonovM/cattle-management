import { configureStore } from "@reduxjs/toolkit";
import cattleReducer from "./cattleSlice";

export const makeStore = () =>
  configureStore({
    reducer: { cattle: cattleReducer },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];