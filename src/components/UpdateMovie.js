// src/components/CreateMovie.js
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const CREATE_MOVIE = gql`
  mutation CreateMovie($input: NewMovie!) {
    createMovie(input: $input) {
      id
      title
      url
    }
  }
`;

const CreateMovie = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [createMovie] = useMutation(CREATE_MOVIE);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMovie({ variables: { input: { title, url } } });
      navigate('/'); // Redirection vers la liste des films après la création
    } catch (error) {
      console.error("Error creating movie:", error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Create a New Movie</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formUrl">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Movie
        </Button>
      </Form>
    </Container>
  );
};

export default CreateMovie;
