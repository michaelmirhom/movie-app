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

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, 
