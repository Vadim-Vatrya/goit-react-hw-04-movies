import PropTypes from 'prop-types';
import noImage from '../../image/noImage.png';


const MoviesListItem = ({ poster, title }) => {
  
  return (
    <div >
      <img 
      src={poster 
        ? `https://image.tmdb.org/t/p/w200${poster}`
        : noImage
      } 
      alt={`Poster ${title}`}
      width='400' 
      height='550'
      />
      <h2>{title}</h2>
    </div>
  );
};



MoviesListItem.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MoviesListItem;

  