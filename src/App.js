import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import NewMovieForm from './components/NewMovieForm';
import EditMovieForm from './components/ EditMovieForm';
import './styles/project-styles.css';

function App() {
  const [movies, setMovies] = useState([]);

  const apiUrl = 'https://stellular-brigadeiros-1c698a.netlify.app';

  useEffect(() => {
    fetch(`${apiUrl}/movies`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const removeMovie = (id) => {
    const updatedMovies = movies.filter(movie => movie.id !== id);
    setMovies(updatedMovies);
    // Here, you should also send a DELETE request to your backend server 
    // to actually delete the movie from the database.
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MoviesList movies={movies} removeMovie={removeMovie} />} />
        <Route path="/movies" element={<MoviesList movies={movies} removeMovie={removeMovie} />} />
        <Route path="/movies/new" element={<NewMovieForm addMovie={addMovie} apiUrl={apiUrl} />} />
        <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
        <Route path="/movies/:id/edit" element={<EditMovieForm movies={movies} apiUrl={apiUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;

