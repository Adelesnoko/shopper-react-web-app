import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="nav nav-tabs mb-2">
      <Link className="nav-link" to="/tuiter">
        Tuiter
      </Link>
      <Link className="nav-link" to="/shopper">
        Shopper
      </Link>
    </nav>
  );
}
export default Nav;
