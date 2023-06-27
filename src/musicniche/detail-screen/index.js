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
  const [peopleLike, setPeopleLike] = useState();
  const [peopleDislike, setPeopleDislike] = useState();
  const [commentValue, setCommentValue] = useState();

  const fetchAlbumDetails = async () => {
    const album = await service.GetAlbumDetail(id);
    console.log("Album Name:  " + album.name);
    setAlbumDetails(album);
    setTracks(album.tracks);
  };

  const handleLikeAlbum = async () => {
    const album = await service.likeAlbum(id, {
      id: albumDetails.id,
      name: albumDetails.name,
    });
  };

  const handleDislikeAlbum = async () => {
    const album = await service.dislikeAlbum(id, {
      id: albumDetails.id,
      name: albumDetails.name,
    });
  };

  const findPeopleWhoLikeAlbum = async () => {
    const peopleLike = await service.findPeopleWhoLikeAlbum(id);
    setPeopleLike(peopleLike);
  };

  const findPeopleWhoDislikeAlbum = async () => {
    const peopleDislike = await service.findPeopleWhoDislikeAlbum(id);
    setPeopleDislike(peopleDislike);
  };

  useEffect(() => {
    fetchAlbumDetails();
    findPeopleWhoLikeAlbum();
    findPeopleWhoDislikeAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {albumDetails && (
        <div>
          <h1 style={{ color: "#17594A" }}>Album Details</h1>
          <h3 style={{ color: "#17594A" }}> Album Name: {albumDetails.name}</h3>
          {/* <h3> Artist: {albumDetails.artist}</h3> */}

          <img
            src={service.albumImageUrl(albumDetails)}
            alt={albumDetails.name}
            style={{ height: "300px" }}
          />
          <hr />
          {currentUser && (
            <div>
              <button onClick={handleLikeAlbum}>Like</button>
              <button onClick={handleDislikeAlbum}>Dislike</button>
              {/* <textarea
                value={comment}
                placeholder="Add your comment here"
                className="form-control border-0"
                onChange={(event) => setWhatsHappening(event.target.value)}
              ></textarea>
              <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Post
              </button> */}
            </div>
          )}
          <hr />
        </div>
      )}

      {peopleLike && (
        <div>
          <h2 style={{ color: "#17594A" }}>People who like this album</h2>
          <div className="list-group">
            {peopleLike.map((person) => (
              <Link
                className="list-group-item"
                to={`/musicniche/profile/${person._id}`}
                key={person._id}
              >
                {person.username}
              </Link>
            ))}
          </div>
        </div>
      )}
      <hr />

      {peopleDislike && (
        <div>
          <h2 style={{ color: "#17594A" }}>People who dislike this album</h2>
          <div className="list-group">
            {peopleDislike.map((person) => (
              <Link
                className="list-group-item"
                to={`/musicniche/profile/${person._id}`}
                key={person._id}
              >
                {person.username}
              </Link>
            ))}
          </div>
        </div>
      )}
      <hr />
    </div>
  );
}

export default DetailsScreen;
