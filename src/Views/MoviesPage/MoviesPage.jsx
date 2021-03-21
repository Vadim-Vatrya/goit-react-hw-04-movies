import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


import {getSearchMovies} from '../../service/api-service';
import MoviesList from '../../components/MoviesList';
import SearchBar from '../../components/SearchBar';
import Loader from '../../components/Loader';




const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);
    getSearchMovies(searchQuery).then(({results}) => {
      if (results.length === 0) {
        toast.error('Please enter new querry!');
      }
      setMovies(results)
      setIsLoading(false)
    });
  }, [searchQuery]);

  const HandleOnChangeQuery = queryMovie => {
    history.push({ ...location, search: `query=${queryMovie}` });
  };


  return (
    <>
     <SearchBar onSubmit={HandleOnChangeQuery}/>

       {searchQuery && (
        <MoviesList
          movies={movies}
          title={`Search results for ${searchQuery}`}
        />
      )}
      {isLoading && <Loader />}
    </>
  )
}



export default MoviesPage;