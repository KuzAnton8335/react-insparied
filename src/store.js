import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: {
    // ...your reducers
    rootReducer,
  },

  devTools: import.meta.env.DEV,
});

export default store;
