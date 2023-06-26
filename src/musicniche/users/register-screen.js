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
    try {
      await dispatch(registrationThunk(user));
      navigate("/musicniche/profile");
    } catch (error) {
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
