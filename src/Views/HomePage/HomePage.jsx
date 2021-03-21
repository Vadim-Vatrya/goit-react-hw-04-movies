import React from 'react';
import {useState, useEffect} from 'react';

import {getPopularMovies} from '../../service/api-service';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';
import style from "./HomePage.module.scss";



const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);

    getPopularMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => console.log('Error: ', error))
      .finally(() =>  setIsLoading(false))
  }, []);

 return (
   <>
   <h1 className={style.title}>Movies in trend</h1>
   <MoviesList movies={movies}/>
   {isLoading && <Loader />}
   </>
 )
};

export default HomePage;
