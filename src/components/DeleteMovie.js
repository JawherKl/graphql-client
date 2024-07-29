import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { Button } from 'react-bootstrap';

const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      id
      title
    }
  }
`;

const DeleteMovie = ({ movieId }) => {
  const [deleteMovie] = useMutation(DELETE_MOVIE);

  const handleDelete = async () => {
    try {
      await deleteMovie({ variables: { id: movieId } });
      window.location.reload(); // Recharger la page ou rediriger vers une autre route
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete Movie
    </Button>
  );
};

export default DeleteMovie;
