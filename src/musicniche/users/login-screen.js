import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";

function LoginScreen() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      await dispatch(loginThunk(user));
      navigate("/musicniche/profile");
    } catch (error) {
      console.error(error);
    }
  };
  const handleRegister = async () => {
    navigate("/musicniche/register");
  };

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
      <hr />
      <h>Don't have an account?</h>
      <br />
      <button onClick={handleRegister} color="rgb(50,100,100)">
        Register Here
      </button>
    </div>
  );
}
export default LoginScreen;
export const user001 = 123;
