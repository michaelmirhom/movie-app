# Movie-App
# Project Description
Movie-App is a comprehensive movie information application. Users can add, edit, view, and delete movie entries. Each movie entry includes details like the movie's name, image, and rating. This app is built using React.js and styled using CSS.

The project consists of both frontend and backend components. The frontend is built with React.js and uses React Router for routing. The backend is implemented using a json-server, which serves as a mock API for managing movie data.
# Installation Instructions
# Clone the repository:
git clone git@github.com:michaelmirhom/movie-app.git
# Change directory to the cloned repository:
cd movie-app
# Install the required dependencies:
npm install
# Install react-router-dom
npm install react-router-dom
# Start the json-server on port 3001:# <Note> our port is 3001 not 3000
json-server --watch db.json --port 3001
# Building and Running the Project
To build the project, run the following command:
npm run build
npm start
# How to Use
The home page displays a list of movies. Each movie has a details button to view more information about the movie, and a remove button to delete the movie.

To add a new movie, click on the "Add New Movie" link in the navigation bar. This will take you to a form where you can input a movie's name, image URL, and rating.
To delete a movie, click on the remove button next to the movie in the list. The movie will be removed from the list immediately.
# Contributors'Guide
If you want to contribute to this project, follow these steps:
Fork the project.
Create your feature branch: git checkout -b feature/AmazingFeature
Commit your changes: git commit -m 'Add some AmazingFeature'
Push to the branch: git push origin feature/AmazingFeature
Open a pull request.
Remember to follow the Code of Conduct to maintain a healthy and respectful community.
# Deployment
The frontend of the Movie-App is deployed on Netlify, while the json-server backend can be deployed on platforms like Render. Ensure that the appropriate deployment settings and environment variables are configured for successful deployment.
# License
This project is licensed under the terms of the MIT License.


