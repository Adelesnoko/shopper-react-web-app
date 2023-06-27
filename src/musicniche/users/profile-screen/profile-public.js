import React, { useState, useEffect } from "react";
import * as service from "../../services/spotify-service";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

function ProfilePublic() {
  const { profileId } = useParams();
  const [peopleThatFollowMe, setPeopleThatFollowMe] = useState();
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleFollow = async () => {
    if (!currentUser) {
      console.error("No user is currently logged in. Please log in first.");
      navigate("/musicniche/login");
      return;
    }
    try {
      await service.createFollow(profileId);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchPeopleThatFollowMe = async () => {
    const people = await service.findFollowsByFollowed(profileId);
    setPeopleThatFollowMe(people);
  };

  useEffect(() => {
    fetchPeopleThatFollowMe();
  }, []);

  return (
    <div>
      <h1 style={{ color: "#17594A" }}>Profile Public</h1>
      <h5 style={{ color: "#17594A" }}>UserId: {profileId}</h5>
      <Button onClick={handleFollow} variant="success">
        Follow
      </Button>
      <hr />

      {peopleThatFollowMe && (
        <div>
          <h3 style={{ color: "#17594A" }}>User's Followers</h3>
          <div className="list-group">
            {peopleThatFollowMe.map((person) => (
              <div className="list-group-item">{person.follower.username}</div>
            ))}
          </div>
          <span style={{ color: "#17594A" }}>
            * Login to explore more information.
          </span>
        </div>
      )}
    </div>
  );
}

export default ProfilePublic;
