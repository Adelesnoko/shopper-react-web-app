import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../../services/auth-thunks";
import * as postsService from "../../services/posts-service";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const [myPosts, setMyPosts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/tuiter/login");
  };

  const handleUpdate = async () => {
    try {
      await dispatch(updateUserThunk(profile));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      //   const { payload } = await dispatch(profileThunk());
      //   setProfile(payload);
      try {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
      } catch (error) {
        console.error(error);
        navigate("/tuiter/login");
      }
    };
    const fetchMyPosts = async () => {
      try {
        const tuits = await postsService.findMyPosts();
        setMyPosts(tuits);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
    fetchMyPosts();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <label>Username</label>
          <input className="form-control" value={profile.username} readOnly />
          <label>Password</label>
          <input
            className="form-control"
            value={profile.password}
            type="password"
          />
          <label>First Name</label>
          <input
            className="form-control"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />

          <label>Last Name</label>
          <input
            className="form-control"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <button className="btn btn-primary ms-2 mt-2" onClick={handleUpdate}>
            Save
          </button>
        </div>
      )}
      <button className="btn btn-danger ms-2 mt-2" onClick={handleLogout}>
        Logout
      </button>
      <hr />
      <h4>My Posts</h4>
      <pre>{JSON.stringify(myPosts, null, 2)}</pre>
    </div>
  );
}
export default ProfileScreen;
