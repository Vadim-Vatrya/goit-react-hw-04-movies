import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import {getMoviesReviews} from '../../service/api-service';
import style from './Reviews.module.scss';


const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    getMoviesReviews(movieId)
    .then(({data }) => setReview(data.results))
    .catch(error => console.log('Error: ', error))
    
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
    {review.length > 0
   ? (<ul className={style.list} >
    {review.map(({ author, id, content }) => (
      <li key={id}>
        <h3>Autor: {author}</h3>
        <p>{content}</p>
      </li>
    ))}
    </ul>)
   : (<p>We don't have any rewiews for this movie.</p>)}
   </>)
}


export default Reviews;