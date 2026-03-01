import { configureStore } from "@reduxjs/toolkit";
import configuratorReducer from "./configurator.slice";
export const store = configureStore({
  reducer: {
    configurator: configuratorReducer,
  },
});
