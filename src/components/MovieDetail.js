// src/components/MovieDetail.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const GET_MOVIE = gql`
  query GetMovie($id: ID!) {
    movie(id: $id) {
      id
      title
      url
      releaseDate
    }
  }
`;

const MovieDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { movie } = data;

  return (
    <Container>
      <h1 className="my-4">{movie.title}</h1>
      <p><strong>URL:</strong> <a href={movie.url} target="_blank" rel="noopener noreferrer">{movie.url}</a></p>
      <p><strong>Release Date:</strong> {movie.releaseDate}</p>
      <Link to="/">
        <Button variant="secondary">Back to List</Button>
      </Link>
    </Container>
  );
};

export default MovieDetail;
