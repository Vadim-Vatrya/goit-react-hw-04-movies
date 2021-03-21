import React from 'react';
import {useState, useEffect} from 'react';
import {getPopularMovies} from '../service/api-service';
import MoviesList from '../components/MoviesList/MoviesList';


const HomePage = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    getPopularMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => console.log('Error: ', error));
  }, []);

 return (
   <>
   <h1>Movies in trend</h1>
   <MoviesList movies={movies}/>
   </>
 )
};

export default HomePage;
