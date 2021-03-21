import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch, useParams } from 'react-router-dom';
import { getMoviesDetailsViews } from "../service/api-service";
// import { toast } from 'react-toastify';
// import routes from 'routes';

import MovieCard from '../components/MovieCard/MovieCard';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';




const MovieDetailsPage = props => { 
  const {location, history} = props;
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const {url, path} = useRouteMatch();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    getMoviesDetailsViews(movieId)
    .then(movie => {
      setMovie(movie)
    })
    .catch(error => console.log('Error: ', error))
    .finally(() => setLoading(false));
  }, [movieId]);
  
  const handleButtonGoBack =() => {
    if (location.state && location.state.from) {
      history.push({
        ...location.state.from,
      });
      return;
    }
    history.push('/');
  };

  return (
    <>
          <button
            type="button"
            onClick={handleButtonGoBack}
          >
            Go back
          </button>
     {movie ? (
        <>
          <MovieCard movie={movie}/>

          <p>Aditional information</p>
          <ul>
            <li>
              <NavLink  to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/rewiews`}></NavLink>
            </li>
          </ul>
          <hr />
          <Route path={`${path}/cast`}>
             {movie && <Cast/>}
          </Route>
          <Route path={`${path}/rewiews`}>
             {movie && <Reviews/>}
          </Route>
        </>
      ) : (
        <h2>No detail information for this film!</h2>
      )}
   
    </>
  )

}

export default MovieDetailsPage;