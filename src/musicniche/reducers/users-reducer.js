import { createSlice } from "@reduxjs/toolkit";
import {
  getUsersThunk,
  loginThunk,
  logoutThunk,
  profileThunk,
  updateUserThunk,
  registrationThunk,
} from "../services/auth-thunks";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    newUser: {},
    error: null,
    loading: false,
    currentUser: null,
  },
  // reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    [updateUserThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    [registrationThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getUsersThunk.rejected]: (state, action) => {
      state.error = action.error;
      state.users = [];
      state.loading = false;
    },
    [getUsersThunk.pending]: (state, action) => {
      state.users = [];
      state.loading = true;
      state.error = null;
    },
  },
});
export default usersSlice.reducer;
