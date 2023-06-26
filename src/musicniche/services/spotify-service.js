import axios from "axios";
import React, { useState, useEffect } from "react";

const CLIENT_ID = "0e2a3e40589e4864a245fd95433a3374";
const CLIENT_SECRET = "b3cd4ec1803547bda3b0582b9216c99b";

const request = axios.create({
  withCredentials: true,
});

export const SearchArtistId = async (artistName) => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  var searchArtistParameters = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  var artistID = await fetch(
    "https://api.spotify.com/v1/search?q=" + artistName + "&type=artist",
    searchArtistParameters
  );
  return artistID.data;
};

export const GetAlbumByArtistId = async (artistId) => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  var searchParameters = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  var Albums = await fetch(
    "https://api.spotify.com/v1/artists/" +
      artistId +
      "/albums" +
      "?include_groups=album&market=US&limit=50",
    searchParameters
  );
  return Albums;
};

export const GetAlbumDetail = async (albumId) => {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  var searchParameters = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  var albumsDetails = await fetch(
    "https://api.spotify.com/v1/albums/" + albumId,
    searchParameters
  );
  return albumsDetails;
};
// export const albumImageUrl = (album) =>
//   `${SPOTIFY_IMAGE_URL}/albums/${album.id}/images/300x300.jpg`;

// export const fullTextSearch = async (text) => {
//   const response = await axios.get(
//     `${SPOTIFY_API}/search/verbose?query=${text}&apikey=${KEY}`
//   );
//   return response.data;
// };

// export const getAlbumDetails = async (albumId) => {
//   const response = await axios.get(
//     `${SPOTIFY_API}/albums/${albumId}?apikey=${KEY}`
//   );
//   return response.data.albums[0];
// };

// export const getAlbumTracks = async (albumId) => {
//   const response = await axios.get(
//     `${SPOTIFY_API}/albums/${albumId}/tracks?apikey=${KEY}`
//   );
//   return response.data.tracks;
// };

// export const likeAlbum = async (albumId, album) => {
//   const response = await request.post(
//     `http://localhost:4000/api/albums/albumId/${albumId}/like`,
//     album
//   );
//   return response.data;
// };

// export const findAlbumsILike = async () => {
//   const response = await request.get(`http://localhost:4000/api/albums/i/like`);
//   return response.data;
// };
