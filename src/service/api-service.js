import axios from 'axios';

const API_KEY = '0d4e8a72aec64d2db9275b816bb7cbd6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

const getPopularMovies = (pageFetch = 1) => {
  return axios.get(`/trending/movie/day?api_key=${API_KEY}&page=${pageFetch}`)
  .then(response => response.data);
};


const getSearchMovies = (name) => {
  return axios.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`)
  .then(response => response.data);
};

const getMoviesDetailsViews = id => {
  return axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
  .then(response => response.data);
};

const getMoviesCastViews = id => {
  return axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
  .then(response => response.data);
};

const getMoviesReviews = id => {
  return axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
  .then(response => response.data);
};

export { getPopularMovies, getSearchMovies, getMoviesDetailsViews, getMoviesCastViews, getMoviesReviews }


