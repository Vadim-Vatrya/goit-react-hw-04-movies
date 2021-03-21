import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import noImage from '../../image/noImage.png';

// import Loader from '../Loader/Loader';


const MoviesList = ({movies, title}) => {

  const location = useLocation();

  return (
    <>
<h2>{title}</h2>
    <ul>
    {movies && movies.map(({ poster_path, title, id }) => {
            return (
              <li key={id} >
                <Link
                  to={{
                    pathname: `movies/${id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : noImage
                    }
                    alt={title}
                  />
                  <p >{title}</p>
                </Link>
              </li>
            );
          }) 
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