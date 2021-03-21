import { NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviesListItem from '../MoviesListItem/MoviesListItem';

const MoviesList = ({movies, location}) => {
  return (
    <>
    <ul>
      {movies.map(({id, poster_path, original_title, release_date}) => (
        <li key={id}>
          <NavLink
          exact
          to={{
            pathname: `movies/${id}`,
            state: { from: location}}}>
          <MoviesListItem   poster={poster_path} title={original_title}   date={release_date} />
          </NavLink>
        </li>
      ))}
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