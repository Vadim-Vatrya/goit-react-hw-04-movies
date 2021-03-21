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


const getSearchMovies = (id, pageFetch = 1, search) => {
  return axios.get(`/search/${id}?api_key=${API_KEY}&language=en-US&query=${search}&page=${pageFetch}&include_adult=false`)
  .then(response => response.data);
};

const getMoviesDetailsViews = id => {
  return axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
  .then(response => response.data);
};

const getMoviesCreditsViews = id => {
  return axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
  .then(response => response.data);
};

const getMoviesReviewsViews = id => {
  return axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
  .then(response => response.data);
};

export {getPopularMovies, getSearchMovies, getMoviesDetailsViews, getMoviesCreditsViews,getMoviesReviewsViews}


