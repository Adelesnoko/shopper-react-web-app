import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../../services/auth-thunks";
import * as postsService from "../../services/posts-service";
import * as spotifyService from "../../services/spotify-service";

function ProfileScreen() {
  const [albumsIlike, setAlbumsIlike] = useState([]);
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState(currentUser);
  const [myPosts, setMyPosts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/musicniche/search");
  };

  const handleUpdate = async () => {
    try {
      await dispatch(updateUserThunk(profile));
    } catch (error) {
      console.error(error);
    }
  };

  // const fetchMyLikes = async () => {
  //   const albums = await spotifyService.findAlbumsILike();
  //   setAlbumsIlike(albums);
  // };

  useEffect(() => {
    // fetchMyLikes();
    const fetchProfile = async () => {
      try {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
      } catch (error) {
        console.error(error);
        navigate("/musicniche/search");
      }
    };
    const fetchMyPosts = async () => {
      try {
        const posts = await postsService.findMyPosts();
        setMyPosts(posts);
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
        <>
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
          <button onClick={handleUpdate} className="btn btn-primary">
            Update
          </button>
        </>
      )}
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
      <pre>{JSON.stringify(albumsIlike, null, 2)}</pre>
    </div>
  );
}

export default ProfileScreen;
