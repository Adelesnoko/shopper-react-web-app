import axios from "axios";
import React, { useState, useEffect } from "react";

const CLIENT_ID = "0e2a3e40589e4864a245fd95433a3374";
const CLIENT_SECRET = "b3cd4ec1803547bda3b0582b9216c99b";

const request = axios.create({
  withCredentials: true,
});

const fetchToken = async () => {
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
  const res = await fetch(
    "https://accounts.spotify.com/api/token",
    authParameters
  );
  const token = await res.json();
  console.log("xxxxxxxxx" + token.access_token);
  return token.access_token;
};

export const getAlbumsByArtistName = async (artistName) => {
  const token = await fetchToken();

  const searchParameters = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
  var artistID = await fetch(
    "https://api.spotify.com/v1/search?q=" + artistName + "&type=artist",
    searchParameters
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.artists.items[0].id;
    });
  console.log("Artist ID is " + artistID);

  const albums = await fetch(
    "https://api.spotify.com/v1/artists/" +
      artistID +
      "/albums" +
      "?include_groups=album&market=US&limit=50",
    searchParameters
  );
  const albumssssss = await albums.json();
  return albumssssss.items;
};

export const GetAlbumDetail = async (albumId) => {
  const token = await fetchToken();
  var searchParameters = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
  const albumsDetails = await fetch(
    "https://api.spotify.com/v1/albums/" + albumId,
    searchParameters
  );
  const album = await albumsDetails.json();
  console.log("Debugger----" + album);
  return album;
};

export const albumImageUrl = (album) => {
  return album.images[0].url;
};

// export const fullTextSearch = async (text) => {
//   const response = await axios.get(
//     `${SPOTIFY_API}/search/verbose?query=${text}&apikey=${KEY}`
//   );
//   return response.data;
// };

// export const getAlbumDetails = async (albumId) => {
//   return "abshjsdh";
// const response = await axios.get(
//   `${SPOTIFY_API}/albums/${albumId}?apikey=${KEY}`
// );
// return response.data.albums[0];
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
