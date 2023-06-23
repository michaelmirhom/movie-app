import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditMovieForm = ({ movies }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [formValues, setFormValues] = useState({ title: '', image: '', rating: '' });

    useEffect(() => {
        const movieToEdit = movies.find((movie) => movie.id === parseInt(id));
        setMovie(movieToEdit);
        if (movieToEdit) {
            setFormValues({
                title: movieToEdit.name,
                image: movieToEdit.image,
                rating: movieToEdit.rating
            });
        }
    }, [id, movies]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Send a PUT request to the server
        fetch(`http://localhost:3001/movies/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        })
            .then(response => response.json())
            .then(updatedMovie => {
                // Log the updated movie
                console.log('Updated Movie:', updatedMovie);
                
                // You might also want to update the movie in your local state here
            })
            .catch(error => console.log(error));

        navigate(`/movies/${id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Replace the form inputs with your actual input fields */}
            <input type="text" name="title" value={formValues.title} onChange={handleChange} placeholder="Title"/>
            <input type="text" name="image" value={formValues.image} onChange={handleChange} placeholder="Image URL"/>
            <input type="text" name="rating" value={formValues.rating} onChange={handleChange} placeholder="Rating"/>
            <button type="submit">Update Movie</button>
        </form>
    );
};

export default EditMovieForm;