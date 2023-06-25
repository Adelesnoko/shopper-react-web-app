import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

export const KEY = process.env.REACT_APP_SPOTIFY_API_KEY;
const SPOTIFY_API = "https://api.spotify.com/v1";
const SPOTIFY_IMAGE_URL = "https://api.napster.com/imageserver/v2";
const BASE_API = process.env.BASE_API;

export const albumImageUrl = (album) =>
  `${SPOTIFY_IMAGE_URL}/albums/${album.id}/images/300x300.jpg`;

export const fullTextSearch = async (text) => {
  const response = await axios.get(
    `${SPOTIFY_API}/search/verbose?query=${text}&apikey=${KEY}`
  );
  return response.data;
};

export const getAlbumDetails = async (albumId) => {
  const response = await axios.get(
    `${SPOTIFY_API}/albums/${albumId}?apikey=${KEY}`
  );
  return response.data.albums[0];
};

export const getAlbumTracks = async (albumId) => {
  const response = await axios.get(
    `${SPOTIFY_API}/albums/${albumId}/tracks?apikey=${KEY}`
  );
  return response.data.tracks;
};

export const likeAlbum = async (albumId, album) => {
  const response = await request.post(
    `http://localhost:4000/api/albums/albumId/${albumId}/like`,
    album
  );
  return response.data;
};

export const findAlbumsILike = async () => {
  const response = await request.get(`http://localhost:4000/api/albums/i/like`);
  return response.data;
};
