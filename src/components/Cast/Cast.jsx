import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Loader from 'react-loader-spinner';

import noImage from '../../image/noImage.png';
import {getMoviesCastViews} from '../../service/api-service';


const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesCastViews(movieId)
    .then(({ cast}) => {
      setCasts(cast);
    })
    .catch(error => console.log('Error: ', error))
    // .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
    <Loader
      type="Oval"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={2000} 
    />
    {casts && casts.length > 0 
    ? (<ul>
      {casts.map(({ original_name, id, profile_path }) => (
        <li key={id}>
          <img
          src={profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : noImage}
          alt={original_name ? original_name : `image`}
          width='150'
          height='230'
          />
          <h4>{original_name ? original_name : `No name`}</h4>
          
        </li>
      )
      )}
    </ul>) :  (<p>No information</p>)}
    </>
  ) 
}


export default Cast;