import React, { useEffect } from "react";
import PostItem from "./post-item";
import { useDispatch, useSelector } from "react-redux";
import { findPostsThunk } from "../services/posts-thunks";

const PostsList = () => {
  const { posts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findPostsThunk());
  }, []);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default PostsList;
