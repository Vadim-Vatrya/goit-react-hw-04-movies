import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
// import Loader from 'react-loader-spinner';

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
    <div className={style.wrapper}>
    {review ? (
      <>
        <ul className={style.list}>
          {review.map((item, index) => (
            <li key={index} className={style.item}>
              <p className={style.title}>Author: {item.author}</p>
              <p> {item.content}</p>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <p className={style.text}>No reviews to show</p>
    )}
  </div>
);
}


export default Reviews;