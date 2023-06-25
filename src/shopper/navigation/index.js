// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHashtag } from "react-icons/fa";
// import {
//   AiFillHome,
//   AiOutlineSearch,
//   AiOutlineUser,
//   AiOutlineLogin,
// } from "react-icons/ai";
// import { GiArchiveRegister } from "react-icons/gi";

// function Navigation() {
//   return (
//     <div className="list-group">
//       <Link to="home" className="list-group-item list-group-item-action">
//         <div className="d-flex align-items-center">
//           <span className="me-2">
//             <AiFillHome />
//           </span>
//           <span className="d-sm-none d-lg-block">Home</span>
//         </div>
//       </Link>
//       <Link to="search" className="list-group-item list-group-item-action">
//         <div className="d-flex align-items-center">
//           <span className="me-2">
//             <AiOutlineSearch />
//           </span>
//           <span className="d-sm-none d-lg-block">Search</span>
//         </div>
//       </Link>
//       <Link to="details" className="list-group-item list-group-item-action">
//         <div className="d-flex align-items-center">
//           <span className="me-2">
//             <FaHashtag />
//           </span>
//           <span className="d-sm-none d-lg-block">Details</span>
//         </div>
//       </Link>
//       <Link to="login" className="list-group-item list-group-item-action">
//         <div className="d-flex align-items-center">
//           <span className="me-2">
//             <AiOutlineLogin />
//           </span>
//           <span className="d-sm-none d-lg-block">Login</span>
//         </div>
//       </Link>
//       <Link to="register" className="list-group-item list-group-item-action">
//         <div className="d-flex align-items-center">
//           <span className="me-2">
//             <GiArchiveRegister />
//           </span>
//           <span className="d-sm-none d-lg-block">Register</span>
//         </div>
//       </Link>
//       <Link to="profile" className="list-group-item list-group-item-action">
//         <div className="d-flex align-items-center">
//           <span className="me-2">
//             <AiOutlineUser />
//           </span>
//           <span className="d-sm-none d-lg-block">Profile</span>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default Navigation;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHashtag } from "react-icons/fa";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineLogin,
} from "react-icons/ai";
import { GiArchiveRegister } from "react-icons/gi";

const Navigation = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    { name: "home", icon: <AiFillHome /> },
    { name: "search", icon: <AiOutlineSearch /> },
    { name: "details", icon: <FaHashtag /> },
    { name: "profile", icon: <AiOutlineUser /> },
    { name: "login", icon: <AiOutlineLogin /> },
    { name: "register", icon: <GiArchiveRegister /> },
  ];
  //   const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          key={link.name}
          to={`/shopper/${link.name}`}
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
        </Link> */}
      {/* )} */}
    </div>
  );
};
export default Navigation;
