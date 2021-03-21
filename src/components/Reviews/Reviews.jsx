import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import {getMoviesReviews} from '../../service/api-service';


const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    getMoviesReviews(movieId)
    .then(({data}) => setReview(data.results))
    .catch(error => console.log('Error: ', error))
    // .finally(() => setIsLoading(false));
  }, [movieId]);

  return (review && review.length > 0
   ? (<ul >
    {review.map(({ author, id, content }) => (
      <li key={id}>
        <h3>Autor: {author}</h3>
        <p>{content}</p>
      </li>
    ))}
    </ul>)
   : (<p>We don't have any rewiews for this movie.</p>))
}

export default Reviews;