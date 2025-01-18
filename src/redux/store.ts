import { configureStore } from "@reduxjs/toolkit";
import bookfavsReducer from "./bookfavsSlice";

const store = configureStore({
  reducer: {
    bookfavs: bookfavsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
