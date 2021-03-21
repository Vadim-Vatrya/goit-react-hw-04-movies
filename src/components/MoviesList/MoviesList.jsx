import { NavLink, useRouteMatch, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

// import Loader from '../Loader/Loader';
import MoviesListItem from '../MoviesListItem/MoviesListItem';

const MoviesList = ({movies, loading = false}) => {

  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <>
    {/* <Loader loading={loading} /> */}
    <ul>
    {movies && movies.map(({ poster_path, title, id }) => (
            <li key={id}>
             <NavLink
             exact
              to={{
                pathname: `${url}/${id}`,
                state: { from: location}}}>
                <MoviesListItem 
                id={id}
                poster={poster_path} 
                title={title}/>
             </NavLink>
            </li>
            )) 
        }
     
    </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default MoviesList;