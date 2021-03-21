import { useState, useEffect } from 'react';
import {getSearchMovies} from '../service/api-service';
import { toast } from 'react-toastify';
import queryString from 'query-string';

import MoviesList from '../components/MoviesList/MoviesList';
import SearchBar from '../components/SearchBar/SearchBar';


const MoviesPage = props => {
  const { history, location } = props;
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(queryString.parse(location.search).query || '',);

  useEffect(() => {
    setQuery(queryString.parse(location.search).query);
  }, [location.search]);

  useEffect(() => {
    setLoading(true);
    history.push({
      ...location,
      search: `?query=${query}`,
    });

    if(query === 0 || !query) {
      setQuery([]);
      return;
    }
    
    getSearchMovies()
    .then(({ results }) => {
      if(results.length === 0) {
        toast.error(`No results were found for ${query}!`);
        setQuery('')
        return;
      }
      setMovies(results);
    })
    .catch(error => console.log('Error: ', error))
    .finally(() => setLoading(false));
  }, [history, location, query]);

  const HandleMovieSearch = newQuery => {
    setQuery(newQuery);
  }


  return (
    <>
     <SearchBar onSubmit={HandleMovieSearch}/>
     <MoviesList movies={movies} />
    </>
  )
}



export default MoviesPage;