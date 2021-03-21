import { useState, useEffect } from 'react';
// import { NavLink, Route, useParams, useRouteMatch, useHistory, useLocation, } from 'react-router-dom';
import { getMoviesDetailsViews } from "../service/api-service";
// import { toast } from 'react-toastify';
import routes from 'routes';

import MovieCard from '../components/MovieCard/MovieCard';




const MovieDetailsPage = props => { 
  const {location, history} = props;
  const { movieId } = props.match.params;
  const [movie, setMovie] = useState(null);

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
     {movie ? (
        <>
          <button
            type="button"
            onClick={handleButtonGoBack}
          >
            Go back
          </button>

          <MovieCard {...movie} {...props}/>
       
        </>
      ) : (
        <h2>No detail information for this film!</h2>
      )}
   
    </>
  )

}

export default MovieDetailsPage;