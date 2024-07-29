// src/App.js
import React from 'react';
import CreateMovie from './components/CreateMovie';
import MoviesList from './components/MoviesList';
//import UpdateMovie from './components/UpdateMovie'; // Pass movieId prop
//import DeleteMovie from './components/DeleteMovie'; // Pass movieId prop
//import MovieDetail from './components/MovieDetail'; // Pass movieId prop

const App = () => {
  return (
    <div>
      <CreateMovie />
      <MoviesList />
      {/* Exemples d'utilisation des autres composants */}
      {/* <UpdateMovie movieId="some-movie-id" /> */}
      {/* <DeleteMovie movieId="some-movie-id" /> */}
      {/* <MovieDetail movieId="some-movie-id" /> */}
    </div>
  );
};

export default App;
