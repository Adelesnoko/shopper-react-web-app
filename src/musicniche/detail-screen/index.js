import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as service from "../services/spotify-service";
import { useSelector } from "react-redux";

function DetailsScreen() {
  const { currentUser } = useSelector((state) => state.users);
  const { id } = useParams();
  const [albumDetails, setAlbumDetails] = useState();
  const [tracks, setTracks] = useState();
  const fetchAlbumDetails = async () => {
    const album = await service.getAlbumDetails(id);
    setAlbumDetails(album);
  };
  const fetchAlbumTracks = async () => {
    const tracks = await service.getAlbumTracks(id);
    setTracks(tracks);
  };

  const handleLikeAlbum = async () => {
    const album = await service.likeAlbum(id, {
      id: albumDetails.id,
      name: albumDetails.name,
    });
  };

  useEffect(() => {
    fetchAlbumDetails();
    fetchAlbumTracks();
  }, []);

  return (
    <div>
      {albumDetails && (
        <div>
          <h1>{albumDetails.name}</h1>
          <img src={service.albumImageUrl(albumDetails)} />
          <hr />
          {currentUser && (
            <div>
              <button onClick={handleLikeAlbum}>Like</button>
              <button>Dislike</button>
              <textarea></textarea>
            </div>
          )}
          <hr />
          <ul className="list-group">
            {tracks &&
              tracks.map((track) => (
                <li className="list-group-item" key={track.id}>
                  <audio className="float-end" controls src={track.previewURL}>
                    {track.name}
                  </audio>
                  <h4>{track.name}</h4>
                </li>
              ))}
          </ul>
        </div>
      )}
      <div></div>
      <pre>{JSON.stringify(albumDetails, null, 2)}</pre>
    </div>
  );
}

export default DetailsScreen;
