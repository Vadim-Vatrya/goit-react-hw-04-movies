import React from 'react';
import { lazy, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// import AppBar from './components/AppBar';
import Loader from './components/Loader';


import Container from './components/Container';
import Navigation from './components/Navigation';


// import HomePage from './Views/HomePage';
// import MoviesPage from './Views/MoviesPage';
// import MovieDetailsPage from './Views/MovieDetailsPage';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./Views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('./Views/MovieDetailsPage' /* webpackChunkName: "movieDetails-page" */),
);

function App() {
  return (
    
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route exact path="/movies" component={MoviesPage}/>
        <Route path="/movies/:movieId"  component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
