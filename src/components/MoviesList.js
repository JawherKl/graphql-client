// src/components/MoviesList.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_MOVIES = gql`
  query GetMovies {
    movies {
      id
      title
      url
      releaseDate
    }
  }
`;

const MoviesList = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {data.movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>URL: <a href={movie.url} target="_blank" rel="noopener noreferrer">{movie.url}</a></p>
            <p>Release Date: {movie.releaseDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
