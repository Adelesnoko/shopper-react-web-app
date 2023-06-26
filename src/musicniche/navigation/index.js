import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineLogin,
} from "react-icons/ai";
import { GiArchiveRegister } from "react-icons/gi";

const Navigation = () => {
  const { pathname } = useLocation();
  const [ignore, musicniche, active] = pathname.split("/");
  const links = [
    { name: "home", icon: <AiFillHome /> },
    // { name: "search", icon: <AiOutlineSearch /> },
    { name: "search", icon: <AiOutlineSearch /> },
    // { name: "details", icon: <FaHashtag /> },
    { name: "profile", icon: <AiOutlineUser /> },
    { name: "login", icon: <AiOutlineLogin /> },
    { name: "register", icon: <GiArchiveRegister /> },
  ];
  // const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          key={link.name}
          to={`/musicniche/${link.name}`}
          className={`list-group-item text-capitalize ${
            active === link.name ? "active" : ""
          }`}
        >
          <div className="d-flex align-items-center">
            <span className="me-2">{link.icon}</span>
            <span className="d-sm-none d-lg-block">{link.name}</span>
          </div>
        </Link>
      ))}

      {/* # Show only Profile Screen when user is logged in, otherwise, show login
      and register screen */}
      {/* {!currentUser && (
        <Link
          className={`list-group-item text-capitalize ${
            active === "Login" ? "active" : ""
          }`}
          to="/tuiter/login"
        >
          <div className="d-flex align-items-center">
            <span className="me-2">
              <AiOutlineLogin />
            </span>
            <span className="d-sm-none d-lg-block">Login</span>
          </div>
        </Link>
      )}
      {!currentUser && (
        <Link
          className={`list-group-item text-capitalize ${
            active === "Register" ? "active" : ""
          }`}
          to="/tuiter/register"
        >
          <div className="d-flex align-items-center">
            <span className="me-2">
              <GiArchiveRegister />
            </span>
            <span className="d-sm-none d-lg-block">Register</span>
          </div>
        </Link>
      )}
      {currentUser && (
        <Link
          className={`list-group-item text-capitalize ${
            active === "Profile" ? "active" : ""
          }`}
          to="/tuiter/profile"
        >
          <div className="d-flex align-items-center">
            <span className="me-2">
              <AiOutlineUser />
            </span>
            <span className="d-sm-none d-lg-block">Profile</span>
          </div>
        </Link>
      )} */}
    </div>
  );
};
export default Navigation;
