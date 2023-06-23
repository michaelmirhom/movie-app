import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/project-styles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link className="navbar-link" to="/movies">Movies</Link>
            <Link className="navbar-link" to="/movies/new">Add New Movie</Link>
        </div>
    );
};

export default NavBar;