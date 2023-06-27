import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

function HomeScreen() {
  return (
    <>
      <ul className="nav nav-pills mb-2 mt-2">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Community
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Yours
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
