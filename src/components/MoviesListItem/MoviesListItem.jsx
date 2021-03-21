import PropTypes from 'prop-types';
import noImage from '../../image/noImage.png';


const MoviesListItem = ({ poster, title, date }) => {
  const srcPoster= poster ? `https://image.tmdb.org/t/p/w200${poster}` : noImage;

  return (
    <div >
      <img src={srcPoster} alt={`Film ${title} poster`}/>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
};

// MoviesListItem.defaultProps = {
//   poster: defaultImage
// };


MoviesListItem.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default MoviesListItem;

  