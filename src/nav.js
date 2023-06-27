import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./musicniche/images/music-niche-logo.jpg";

function Nav() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="NavBar">
      {/* <Link className="nav-link" to="/tuiter">
        Tuiter
      </Link>
      <Link className="nav-link" to="/shopper">
        Shopper
      </Link> */}
      <Link className="nav-link" to="/musicniche/home">
        <a href="/" className="logo">
          <img
            className="logo"
            height="80px"
            src={logo}
            alt="Music Niche Logo"
          />
        </a>
      </Link>
    </nav>
  );
}
export default Nav;
