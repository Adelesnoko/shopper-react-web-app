import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registrationThunk } from "../services/auth-thunks";
import { Button } from "react-bootstrap";

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
      <h1 style={{ color: "#17594A" }}>Register</h1>
      <input
        placeholder="Username"
        className="form-control mt-2"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        className="form-control mt-2"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Button onClick={handleRegister} variant="success mt-2">
        Register
      </Button>
    </div>
  );
}
export default RegisterScreen;
