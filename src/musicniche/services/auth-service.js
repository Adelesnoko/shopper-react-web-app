import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_API_BASE;
// const SERVER_API_URL = "http://localhost:4000";
const USERS_URL = `${SERVER_API_URL}/users`;

const request = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
  const response = await request.post(`${USERS_URL}/login`, {
    username,
    password,
  });
  const user = response.data;
  return user;
};

export const logout = async () => {
  const response = await request.post(`${USERS_URL}/logout`);
  return response.data;
};
export const getProfile = async () => {
  const response = await request.post(`${USERS_URL}/profile`);
  return response;
};
export const getUsers = async () => {
  const response = await request.get(USERS_URL);
  return response.data;
};
export const updateUser = async (user) => {
  const response = await request.put(`${USERS_URL}/${user._id}`, user);
  return response.data;
};
export const register = async ({ username, password }) => {
  console.log("Calling register---6--");
  const response = await request.post(`${USERS_URL}/register`, {
    username,
    password,
  });
  console.log("Calling register---7--");
  const user = response.data;
  return user;
};
