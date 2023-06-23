import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/project-styles.css';

function MoviesList({ movies, removeMovie }) {
  const movieItems = movies.map(movie => (
    <div key={movie.id} className="movie-card">
      <img src={movie.image} alt={movie.name} className="movie-image" />
      <h3>{movie.name}</h3>
      <p>Rating: {movie.rating}</p>
      <Link to={`/movies/${movie.id}`} className="detail-button">Details</Link>  {/* Replace this line */}
      <button onClick={() => removeMovie(movie.id)}>Remove</button>
    </div>
  ));

  return (
    <div className="movie-grid">
      {movieItems}
    </div>
  );
}

export default MoviesList;