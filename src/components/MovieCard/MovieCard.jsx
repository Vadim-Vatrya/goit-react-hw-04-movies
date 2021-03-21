import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noImage from "../../image/noImage.png";
import style from './MovieCard.module.scss';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const { url } = useRouteMatch();

  const { poster_path, original_title, release_date, overview,  vote_average } = movie;

  return (
    <>
      <hr />
      <div className={style.card}>
        <img
          className={style.imageMovie}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : noImage
          }
          alt={original_title}
        />
        <div className={style.content}>
          <h2 className={style.title}>{original_title}</h2>
          <p className={style.text}>User Score: {vote_average * 10}%</p>
          <p className={style.category}>Overview:</p>
          <p className={style.text}>{overview}</p>

          <p className={style.category}>Genres:</p>
          {movie.genres && (
            <ul className={style.ulGenre}>
              {movie.genres.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          )}
           {release_date && (
              <>
                <p className={style.text}>Date:</p>
                <p className={style.text}>{release_date}</p>
              </>
            )}
        </div>
      </div>
      <div className={style.nav}>
        <p className={style.category}>Additional information</p>
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from ?? '/' },
              }}
              className={style.link}
              activeClassName={style.activeLink}
            >
              Cast
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from ?? '/' },
              }}
              className={style.link}
              activeClassName={style.activeLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;