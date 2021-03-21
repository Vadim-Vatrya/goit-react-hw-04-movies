import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import noImage from "../../image/noImage.png";

function MovieCard({ movie }) {
  const location = useLocation();
  const { url } = useRouteMatch();

  const { poster_path, original_title, release_date, overview,  vote_average } = movie;

  return (
    <>
      <hr />
      <div >
        <img
          
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : noImage
          }
          alt={original_title}
        />
        <div >
          <h2 >{original_title}</h2>
          <p >User Score: {vote_average}</p>
          <p >Overview:</p>
          <p >{overview}</p>

          <p >Genres:</p>
          {movie.genres && (
            <ul>
              {movie.genres.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          )}
           {release_date && (
              <>
                <p>Date:</p>
                <p>{release_date}</p>
              </>
            )}
        </div>
      </div>
      <div>
        <p >Additional information</p>
        <ul >
          <li >
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from ?? '/' },
              }}
              // className={s.link}
              // activeClassName={s.activeLink}
            >
              Cast
            </NavLink>
          </li>
          <li >
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from ?? '/' },
              }}
              // className={s.link}
              // activeClassName={s.activeLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MovieCard;