import React, { useState } from 'react';
import '../styles/project-styles.css';

function NewMovieForm({ addMovie }) {
  const [movie, setMovie] = useState({ name: '', image: '', rating: '' });

  const apiUrl = 'http://localhost:3001';  // set apiUrl to 'http://localhost:3001'

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${apiUrl}/movies`, {  // use apiUrl here
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
      .then(response => response.json())
      .then(data => {
        // Check if the movie was added successfully
        if (data && data.id) {
          // Call the addMovie function with the new movie data
          addMovie(data);
          // Reset the form
          setMovie({ name: '', image: '', rating: '' });
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input type="text" name="name" onChange={handleChange} value={movie.name} />
      </label>
      <label>Image URL:
        <input type="text" name="image" onChange={handleChange} value={movie.image} />
      </label>
      <label>Rating:
        <input type="text" name="rating" onChange={handleChange} value={movie.rating} />
      </label>
      <input type="submit" value="Add Movie" />
    </form>
  );
}

export default NewMovieForm;
