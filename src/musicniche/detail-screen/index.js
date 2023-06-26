import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as service from "../services/spotify-service";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DetailsScreen() {
  const { currentUser } = useSelector((state) => state.users);
  const { id } = useParams();
  const [albumDetails, setAlbumDetails] = useState();
  const [tracks, setTracks] = useState();

  const fetchAlbumDetails = async () => {
    const album = await service.GetAlbumDetail(id);
    console.log("Album Name:  " + album.name);
    setAlbumDetails(album);
    setTracks(album.tracks);
  };
  console.log("ID is:  " + id);

  useEffect(() => {
    console.log("----aaaaaaa");
    fetchAlbumDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {albumDetails && (
        <div>
          <h1>Album Details</h1>
          <h2> Name: {albumDetails.name}</h2>
          <img
            src={service.albumImageUrl(albumDetails)}
            alt={albumDetails.name}
          />
          {/* <hr />
          {currentUser && (
            <div>
              <button onClick={handleLikeAlbum}>Like</button>
              <button>Dislike</button>
              <textarea></textarea>
            </div>
          )}
          <hr /> */}
        </div>
      )}
      <div></div>
    </div>
  );
}

export default DetailsScreen;
