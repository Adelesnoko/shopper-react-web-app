import userReducer from "../reducers/auth-reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
