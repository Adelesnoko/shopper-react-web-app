import axios from "axios";

// const POSTS_API = 'http://localhost:4000/api/posts';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const API_BASE = "http://localhost:4000/api";
const API_BASE = process.env.REACT_APP_API_BASE;
const POSTS_API = `${API_BASE}/posts`;
const request = axios.create({
  withCredentials: true,
});

export const createPost = async (post) => {
  const response = await request.post(POSTS_API, post);
  return response.data;
};

export const findPosts = async () => {
  const response = await request.get(POSTS_API);
  return response.data;
};

export const findMyPosts = async () => {
  const response = await request.get(`${POSTS_API}/my-posts`);
  return response.data;
};

export const deletePost = async (tid) => {
  const response = await request.delete(`${POSTS_API}/${tid}`);
  return response.data;
};

export const updatePost = async (post) => {
  const response = await request.put(`${POSTS_API}/${post._id}`, post);
  // return post;
  return response.data;
};
