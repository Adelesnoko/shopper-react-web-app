import React, { useState } from "react";
import { FaRegComment, FaRegShareSquare } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsHandThumbsDownFill, BsHandThumbsDown } from "react-icons/bs";
import { updatePostThunk } from "../services/posts-thunks";
import { useDispatch } from "react-redux";

const PostStats = ({ post }) => {
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);
  const [disliked, setDisliked] = useState(post.disliked);
  const [dislikes, setDislikes] = useState(post.dislikes);

  const dispatch = useDispatch();

  const handleLike = () => {
    const updatedLikes = liked ? likes - 1 : likes + 1;
    setLikes(updatedLikes);
    setLiked(!liked);
    dispatch(updatePostThunk({ ...post, likes: updatedLikes }));
  };
  const handleDislike = () => {
    const updatedDislikes = disliked ? dislikes - 1 : dislikes + 1;
    setDislikes(updatedDislikes);
    setDisliked(!disliked);
    dispatch(updatePostThunk({ ...post, dislikes: updatedDislikes }));
  };

  return (
    <>
      <div className="col-2">
        <FaRegComment />
        <span style={{ marginLeft: "5px" }}>{post.replies}</span>
      </div>

      <div className="col-2">
        <AiOutlineRetweet />
        <span style={{ marginLeft: "5px" }}>{post.reposts}</span>
      </div>

      <div className="col-2">
        {liked ? (
          <AiFillHeart onClick={handleLike} style={{ color: "#F00040" }} />
        ) : (
          <AiOutlineHeart onClick={handleLike} />
        )}
        <span style={{ marginLeft: "5px" }}>{likes}</span>
      </div>

      <div className="col-2">
        {disliked ? (
          <BsHandThumbsDownFill
            onClick={handleDislike}
            style={{ color: "light-grey" }}
          />
        ) : (
          <BsHandThumbsDown onClick={handleDislike} />
        )}
        <span style={{ marginLeft: "5px" }}>{dislikes}</span>
      </div>

      <div className="col-2">
        <span style={{ marginLeft: "5px" }}>
          <FaRegShareSquare />
        </span>
      </div>
    </>
  );
};
export default PostStats;
