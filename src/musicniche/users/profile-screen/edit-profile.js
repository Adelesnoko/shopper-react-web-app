import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../../services/auth-thunks";
import Button from "react-bootstrap/Button";

function EditProfile() {
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/musicniche/profile");
  };

  const handleUpdate = async () => {
    try {
      await dispatch(updateUserThunk(profile));
    } catch (error) {
      console.error(error);
    }
    navigate("/musicniche/profile");
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
    fetchProfile();
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
          <label>Email</label>
          <input
            className="form-control"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <label>Date of Birth</label>
          <input
            className="form-control"
            value={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <label>Change Your User Type</label>
          <select
            class="form-select"
            value={profile.usertype}
            onChange={(e) =>
              setProfile({ ...profile, usertype: e.target.value })
            }
          >
            <option value="USER">USER</option>
            <option value="VIPUSER">VIPUSER</option>
          </select>
          <br />
          <Button onClick={handleUpdate} variant="success">
            Save
          </Button>{" "}
        </>
      )}
      <Button onClick={handleCancel} variant="secondary">
        Cancel
      </Button>

      {/* <pre>{JSON.stringify(albumsIlike, null, 2)}</pre> */}
    </div>
  );
}

export default EditProfile;
