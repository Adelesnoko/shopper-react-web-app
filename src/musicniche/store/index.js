import userReducer from "../reducers/users-reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
