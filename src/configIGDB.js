// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const AUTHORIZATION = process.env.REACT_APP_AUTHORIZATION;

const API_URL = "https://fierce-ocean-46816.herokuapp.com/https://api.igdb.com/v4/games/";

const IMAGE_BASE_URL = 'https://images.igdb.com/igdb/image/upload/t_720p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  API_URL,
  CLIENT_ID,
  AUTHORIZATION,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
