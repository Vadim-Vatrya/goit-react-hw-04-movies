import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import './App.css';

import HomePage from './Views/HomePage';
import MoviesPage from './Views/MoviesPage';
import MovieDetailsPage from './Views/MovieDetailsPage';

function App() {
  return (
    
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route exact path="/movies" component={MoviesPage}/>
        <Route path="/movies/:movieId"  component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </Container>
  );
};

export default App;
