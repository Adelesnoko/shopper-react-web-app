import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { profileThunk, logoutThunk } from "../../services/auth-thunks";
import * as postsService from "../../services/posts-service";
import * as spotifyService from "../../services/spotify-service";
import Button from "react-bootstrap/Button";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState(currentUser);
  const [albumsIlike, setAlbumsIlike] = useState([]);
  const [albumsIDislike, setAlbumsIDislike] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [peopleIFollow, setPeopleIFollow] = useState([]);
  const [peopleWhoFollowMe, setPeopleWhoFollowMe] = useState([]);
  const [isVIP, setVIP] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/musicniche/login");
  };

  const handleEdit = async () => {
    navigate("/musicniche/profile/edit-profile");
  };

  const fetchMyPosts = async () => {
    try {
      const posts = await postsService.findMyPosts();
      setMyPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMyLikes = async () => {
    const albums = await spotifyService.findAlbumsILike();
    setAlbumsIlike(albums);
  };

  const fetchMyDislikes = async () => {
    const albums = await spotifyService.findAlbumsIDislike();
    setAlbumsIDislike(albums);
  };

  const fetchPeopleIFollow = async () => {
    const people = await spotifyService.findPeopleIFollow();
    setPeopleIFollow(people);
  };

  const fetchPeopleWhoFollowMe = async () => {
    const people = await spotifyService.findPeopleWhoFollowMe();
    setPeopleWhoFollowMe(people);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
      } catch (error) {
        console.error(error);
        navigate("/musicniche/home");
      }
    };
    dispatch(profileThunk())
      .unwrap()
      .then((user) => {
        if (user.usertype === "VIPUSER") {
          setVIP(true);
        }
      })
      .catch((error) => {
        // handle the error appropriately
        console.log(error);
      });

    fetchProfile();

    // fetchMyPosts();
    fetchMyLikes();
    fetchPeopleIFollow();
    fetchPeopleWhoFollowMe();
  }, []);

  return (
    <div>
      <h1 style={{ color: "#17594A" }}>Profile</h1>
      <div
        style={{
          padding: "10px",
          border: "3px solid #17594A",
          // backgroundColor: "beige",
        }}
      >
        <h3>Hello, {profile.firstName}</h3>
        <p>Username: {profile.username}</p>
        <p>First Name: {profile.firstName}</p>
        <p>Last Name: {profile.lastName}</p>
        <p>Pass Word: ******</p>
        <p>Email: {profile.email}</p>
        <p>User Type: {profile.usertype}</p>
        <p>Date of Birth: {profile.dob}</p>
        <Button onClick={handleEdit} variant="outline-primary">
          Edit
        </Button>
        <Button onClick={handleLogout} variant="outline-danger">
          Logout
        </Button>
      </div>
      <br />

      {isVIP && peopleWhoFollowMe && (
        <>
          <h3 style={{ color: "#17594A" }}>People who follow me</h3>
          <div className="list-group">
            {peopleWhoFollowMe.map((person) => (
              <Link
                to={`/musicniche/profile/${person._id}`}
                className="list-group-item"
                key={person._id}
              >
                <h4>{person.username}</h4>
              </Link>
            ))}
          </div>
        </>
      )}
      <br />

      {peopleIFollow && (
        <>
          <h3 style={{ color: "#17594A" }}>People I follow</h3>
          <div className="list-group">
            {peopleIFollow &&
              peopleIFollow.map((person) => (
                <Link
                  to={`/musicniche/profile/${person._id}`}
                  className="list-group-item"
                  key={person._id}
                >
                  <h4>{person.username}</h4>
                </Link>
              ))}
          </div>
        </>
      )}
      <br />

      {albumsIlike && (
        <div>
          <h3 style={{ color: "#17594A" }}>Albums I like</h3>

          <div className="list-group">
            {albumsIlike &&
              albumsIlike.map((album) => (
                <Link
                  to={`/musicniche/detail-screen/${album.albumId}`}
                  className="list-group-item"
                  key={album.id}
                >
                  <h4>{album.name}</h4>
                </Link>
              ))}
          </div>
        </div>
      )}
      <br />

      {albumsIDislike && (
        <div>
          <h3 style={{ color: "#17594A" }}>Albums I dislike</h3>

          <div className="list-group">
            {albumsIDislike &&
              albumsIDislike.map((album) => (
                <Link
                  to={`/musicniche/detail-screen/${album.albumId}`}
                  className="list-group-item"
                  key={album.id}
                >
                  <h4>{album.name}</h4>
                </Link>
              ))}
          </div>
        </div>
      )}
      <br />
    </div>
  );
}

export default ProfileScreen;
