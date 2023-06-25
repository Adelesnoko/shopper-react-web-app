import React, { useState } from "react";
import {
  AiOutlinePicture,
  AiOutlineFileGif,
  AiOutlineSmile,
  AiOutlineCalendar,
  AiOutlineBold,
  AiOutlineItalic,
} from "react-icons/ai";
import { HiOutlineChartBar, HiOutlineLocationMarker } from "react-icons/hi";
import { createPostThunk } from "../services/posts-thunks";
import { useDispatch } from "react-redux";

const AdminPost = () => {
  let [adminPost, setAdminPost] = useState("");
  const dispatch = useDispatch();
  const postClickHandler = () => {
    if (adminPost.trim() === "") {
      // Display the prompt when the post content is blank
      alert("Please add your content. Cannot post blank value.");
    } else {
      const newPost = {
        post: adminPost,
      };
      dispatch(createPostThunk(newPost));
      setAdminPost("");
    }
  };
  return (
    <div className="row">
      <div className="col-auto">
        <img
          className="rounded-circle"
          width={50}
          src={require(`./images/nasa.png`)}
          alt="Nasa"
        />
      </div>
      <div className="col-10">
        <textarea
          value={adminPost}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setAdminPost(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={postClickHandler}
          >
            Post
          </button>
          <div className="text-primary fs-2">
            <span style={{ marginLeft: "5px" }}>
              <AiOutlinePicture style={{ fontSize: "25px" }} />
            </span>
            <span style={{ marginLeft: "5px" }}>
              <AiOutlineFileGif style={{ fontSize: "25px" }} />
            </span>
            <span style={{ marginLeft: "5px" }}>
              <HiOutlineChartBar style={{ fontSize: "25px" }} />
            </span>
            <span style={{ marginLeft: "5px" }}>
              <AiOutlineSmile style={{ fontSize: "25px" }} />
            </span>
            <span style={{ marginLeft: "5px" }}>
              <AiOutlineCalendar style={{ fontSize: "25px" }} />
            </span>
            <span style={{ marginLeft: "5px" }}>
              <HiOutlineLocationMarker style={{ fontSize: "25px" }} />
            </span>
            <span style={{ marginLeft: "5px" }}>
              <AiOutlineBold style={{ fontSize: "25px" }} />
            </span>
            <span style={{ marginLeft: "5px" }}>
              <AiOutlineItalic style={{ fontSize: "25px" }} />
            </span>
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};
export default AdminPost;
