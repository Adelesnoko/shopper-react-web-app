import React from "react";
import { useDispatch } from "react-redux";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import PostStats from "./post-stats";
// import { deletePost } from "../reducers/posts-reducer";
import { deletePostThunk } from "../services/posts-thunks";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const deletePostHandler = (id) => {
    dispatch(deletePostThunk(id));
  };

  return (
    <>
      <li className="list-group-item">
        <div className="row">
          <div className="col-1 mt-1">
            {/* <img className="rounded-circle" width={50} src={require(`../images/${post.image}`)} alt="PostImage"/> */}
            {post.image && (
              <img
                className="rounded-circle"
                width={50}
                src={require(`../images/${post.image}`)}
                alt="PostImage"
              />
            )}
          </div>
          <div className="col-11">
            <div style={{ display: "flex", alignItems: "center" }}>
              <strong>{post.userName}</strong>{" "}
              <span style={{ color: "#0064C8", marginLeft: "5px" }}>
                <TbDiscountCheckFilled />
              </span>
              <span style={{ marginLeft: "5px" }}>{post.handle}</span>
              <span style={{ marginLeft: "5px" }}>
                <BsDot />
              </span>
              <span style={{ marginLeft: "5px" }}>{post.time}</span>
              <div className="ms-auto">
                <button
                  onClick={() => deletePostHandler(post._id)}
                  className="btn"
                  title="Delete Post"
                >
                  <BiX />
                </button>
              </div>
            </div>
            <div>{post.post}</div>
            <div className="row mt-3">
              <PostStats post={post} />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default PostItem;
