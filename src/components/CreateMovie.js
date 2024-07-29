// src/components/CreateMovie.js
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_MOVIE = gql`
  mutation CreateMovie($input: NewMovie!) {
    createMovie(input: $input) {
      id
      title
      url
      releaseDate
    }
  }
`;

const CreateMovie = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [createMovie] = useMutation(CREATE_MOVIE);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createMovie({
        variables: {
          input: {
            title,
            url,
          },
        },
      });
      console.log('Movie created:', data.createMovie);
    } catch (error) {
      console.error('Error creating movie:', error);
    }
  };

  return (
    <div>
      <h1>Create New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Movie</button>
      </form>
    </div>
  );
};

export default CreateMovie;
