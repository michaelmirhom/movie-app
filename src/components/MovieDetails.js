/* MovieDetails.js */
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/project-styles.css';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <h3>Loading...</h3>;

  return (
    <div className="movie-card container">
      <h2>{movie.name}</h2>
      <img className="movie-image" src={movie.image} alt={movie.name} />
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

export default MovieDetails;