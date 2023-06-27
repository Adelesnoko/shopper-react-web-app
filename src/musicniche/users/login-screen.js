import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
import { Button } from "react-bootstrap";

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
      <h1 style={{ color: "#17594A" }}>Login</h1>
      <p style={{ color: "#17594A" }}>
        Log in and enjoy full functionality of the site.{" "}
      </p>
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
      <Button onClick={handleLogin} variant="success mt-2">
        Login
      </Button>
      <hr />
      <h>Don't have an account?</h>
      <br />
      <Button onClick={handleRegister} variant="secondary mt-2">
        Register Here
      </Button>
    </div>
  );
}
export default LoginScreen;
export const user001 = 123;
