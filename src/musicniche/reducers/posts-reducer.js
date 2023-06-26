import { createSlice } from "@reduxjs/toolkit";
// import posts from "./posts.json";
import {
  updatePostThunk,
  createPostThunk,
  deletePostThunk,
  findPostsThunk,
} from "../services/posts-thunks";

const initialState = {
  posts: [],
  loading: false,
};

// const currentUser = {
//   "userName": "NASA",
//   "handle": "@nasa",
//   "image": "nasa.png",
// };

// const templatePost = {
//   ...currentUser,
//   "topic": "Space",
//   "time": "2min",
//   "liked": false,
//   "replies": 0,
//   "reposts": 0,
//   "likes": 0,
// }

const postsSlice = createSlice({
  name: "posts",
  // initialState: { posts: posts },
  initialState,
  extraReducers: {
    [createPostThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts.push(payload);
    },

    [deletePostThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = state.posts.filter((t) => t._id !== payload);
    },

    [updatePostThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const postNdx = state.posts.findIndex((t) => t._id === payload._id);
      state.posts[postNdx] = { ...state.posts[postNdx], ...payload };
    },

    [findPostsThunk.pending]: (state) => {
      state.loading = true;
      state.posts = [];
    },
    [findPostsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [findPostsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
  reducers: {
    // deletePost(state, action) {
    //     const index = state.posts
    //         .findIndex(post =>
    //           post._id === action.payload);
    //     state.posts.splice(index, 1);
    //   },
    // createPost(state, action) {
    //   state.posts.unshift({
    //     ...action.payload,
    //     ...templatePost,
    //     _id: (new Date()).getTime(),
    //   })
    // }
  },
});
// export const {createPost, deletePost} = postsSlice.actions;
export default postsSlice.reducer;
