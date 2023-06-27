import React from "react";
// import postsArray from "./post.json"
import PostSummaryItem from "./post-summary-item";
import { useSelector } from "react-redux";

const PostSummaryList = () => {
  const { posts } = useSelector((state) => state.posts);
  return (
    <ul className="list-group">
      {posts.map((post) => (
        <PostSummaryItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default PostSummaryList;
