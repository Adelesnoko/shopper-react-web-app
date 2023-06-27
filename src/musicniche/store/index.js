import userReducer from "../reducers/users-reducer";
import postsReducer from "../reducers/posts-reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
  },
});
