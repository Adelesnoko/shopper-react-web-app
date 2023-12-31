import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk } from "../services/auth-thunks";

function UsersContextLoader({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  return children;
}

export default UsersContextLoader;
