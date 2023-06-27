import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const getUsersThunk = createAsyncThunk("user/getUsers", async () => {
  const user = await authService.getUsers();
  return user;
});

export const loginThunk = createAsyncThunk(
  "user/login",
  async (credentials) => {
    const user = await authService.login(credentials);
    return user;
  }
);

export const profileThunk = createAsyncThunk("users/profile", async () => {
  const response = await authService.getProfile();
  return response.data;
});

export const logoutThunk = createAsyncThunk("users/logout", async () => {
  return await authService.logout();
});

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (user) => {
    await authService.updateUser(user);
    return user;
  }
);

export const registrationThunk = createAsyncThunk(
  "users/register",
  async (user) => {
    console.log("Calling register---4--");
    const currentUser = await authService.register(user);
    console.log("Calling register---5--");
    return currentUser;
  }
);
