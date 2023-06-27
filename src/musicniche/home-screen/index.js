import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import AdminPost from "./admin-post/admin-post";
import { profileThunk } from "../services/auth-thunks";

function HomeScreen() {
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileThunk())
      .unwrap()
      .then((user) => {
        if (user.usertype === "ADMIN") {
          setIsAdmin(true);
        }
      })
      .catch((error) => {
        // handle the error appropriately
        console.log(error);
      });
  }, [dispatch]);

  return (
    <>
      {isAdmin && <AdminPost />}
      <ul className="nav nav-pills mb-2">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Trending News For Today
          </a>
        </li>
      </ul>

      <div className="position-relative mb-2">
        <img
          src="/images/adele-album.jpg"
          className="w-100"
          alt="Adele Album"
        />
        <h3 className="position-absolute wd-nudge-up text-white">
          Is Adele Dropping a Secret Album Soon?
        </h3>
      </div>
      <PostSummaryList />
    </>
  );
}
export default HomeScreen;
