import noImage from "../../images/noImage.png";

const MovieCard = ({movie}) => {
  const { poster_path, original_title, release_date, overview, id, vote_average } = movie;
  const srcPoster= poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : noImage;
  return (
    <>
    <div>
      <div>
      <img
          src={srcPoster}
          alt={original_title}
          width="200"
          />
      </div>

      <h2>{original_title}</h2>
        <p>User Rating: {vote_average * 10} %</p>
        <p >About Film:</p>
        <p>{overview}</p>
        <h2>Genres: </h2>

        <ul >
          {movie.genres.map(({ id, name }) => (
            <li key={id}>
              {name}
            </li>
          ))}
        </ul>
    </div>

    <ul >
            <li >
              <NavLink
                className={s.style}
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li className={s.detailsItem}>
              <NavLink
                className={s.style}
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
       
    </>
  );
};


export default MovieCard;