import { useState, useEffect } from 'react';
import {getSearchMovies} from '../service/api-service';
import { toast } from 'react-toastify';
import queryString from 'query-string';

import MoviesList from '../components/MoviesList/MoviesList';
import SearchBar from '../components/SearchBar/SearchBar';


const MoviesPage = props => {
  const { history, location } = props;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(queryString.parse(location.search).query || '',);

  useEffect(() => {
    setQuery(queryString.parse(location.search).query);
  }, [location.search]);

  useEffect(() => {
    
    if(query === 0 || !query) {
      setMovies([]);
      return;
    }
    
    setLoading(true);

    getSearchMovies()
    .then(({ results }) => {
      if(results.length === 0) {
        toast.error(`No results were found for ${query}!`);
        setQuery('');
      }
      setMovies(results);
    })
    .catch(error => console.log('Error: ', error))
    .finally(() => setLoading(false));
  }, [query, location, history]);

  const HandleMovieSearch = newQuery => {
    setQuery(newQuery);
  }


  return (
    <>
     <SearchBar onSubmit={HandleMovieSearch}/>
     <MoviesList movies={movies} loading={loading}/>
    </>
  )
}



export default MoviesPage;