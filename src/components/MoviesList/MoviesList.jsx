import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import noImage from '../../image/noImage.png';

import style from './MoviesList.module.scss';
// import Loader from '../Loader/Loader';


const MoviesList = ({movies, title}) => {

  const location = useLocation();

  return (
    <div className={style.wrapper}>
<h2>{title}</h2>
    <ul className={style.list}>
    {movies && movies.map(({ poster_path, title, id }) => {
            return (
              <li key={id} className={style.item}>
                <Link
                  to={{
                    pathname: `movies/${id}`,
                    state: { from: location },
                  }}
                >
                  <img
                  className={style.image}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : noImage
                    }
                    alt={title}
                  />
                  <p className={style.title}>{title}</p>
                </Link>
              </li>
            );
          }) 
        }
     
    </ul>
    </div>
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