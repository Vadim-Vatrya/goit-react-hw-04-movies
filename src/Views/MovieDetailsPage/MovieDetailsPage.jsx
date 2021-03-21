import { useState, useEffect } from 'react';
import { Route, useRouteMatch, useParams, useLocation, useHistory } from 'react-router-dom';
import { getMoviesDetailsViews } from "../../service/api-service";
// import { toast } from 'react-toastify';
// import routes from 'routes';
 
import MovieCard from '../../components/MovieCard';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';




const MovieDetailsPage = () => { 
  const { path } = useRouteMatch();
  const { movieId } = useParams();
  const [movies, setMovies] = useState({});
  const location = useLocation();
  const history = useHistory();


  useEffect(() => {
    getMoviesDetailsViews(movieId).then(data => {
      setMovies(data);
    });
  }, [movieId]);
  
  const handleButtonGoBack =() => {
    return history.push(location?.state?.from || '/');
  };

  return (
    <>
          <button
            type="button"
            onClick={handleButtonGoBack}
          >
            Go back
          </button>

          {movies && <MovieCard movie={movies} />}
          
          <Route path={`${path}:movieId/cast`}>
        {movies && <Cast />}
      </Route>

      <Route path={`${path}:movieId/reviews`}>
        {movies && <Reviews />}
      </Route>
    </>
  )

}

export default MovieDetailsPage;