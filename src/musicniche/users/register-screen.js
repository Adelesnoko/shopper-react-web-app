import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registrationThunk } from "../services/auth-thunks";
function RegisterScreen() {
  const [user, setUser] = useState({});
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = async () => {
    console.log("Calling register-----");
    try {
      await dispatch(registrationThunk(user));
      console.log("Calling register--1---");
      navigate("/musicniche/profile");
    } catch (error) {
      console.log("Calling register---2--");
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <input
        placeholder="Username"
        className="form-control"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        className="form-control"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={handleRegister} className="btn btn-primary">
        Register
      </button>
    </div>
  );
}
export default RegisterScreen;
