# Rancid Tomatillos

## Deployed Site

View the deployed site [here](https://rancidtomatillos-client.netlify.app/)!

## Table of Contents   

- [Abstract](#abstract)
- [Project Goals](#project-goals)
- [Project Specs](#project-specs)
- [Challenges](#challenges)
- [Future Iterations](#future-iterations)
- [Install and Setup](#install-and-setup)
- [api](#api)
- [Tech Stack](#tech-stack)
- [Contributors](#contributors)

## Abstract

Looking for a new movie to watch? Welcome to Rancid Tomatillos! This is a web app that provides a list of movies, their Rancid Tomatillo rating, and details about the movie's runtime, synopsis, genre, budget, and revenue. Keep track of your opinion on each movie by logging in and leaving your own rating.

Sample login credentials that can be used: 

username: sam@turing.io

password: 123456

## Project Goals

- Gain competency with React fundamentals and asynchronous JavaScript
- Practice refactoring
- Create a multi-page UI using Router
- Build an API using Express and deploy to Heroku
- Learn and implement Cypress end to end testing


## Project Specs

View the spec for this project [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html).

When the Rancid Tomatillos app loads, the user will see the home page with all movies displayed. Each movie card includes the movie's cover photo, title, and Rancid Tomatillo rating.

**Homepage:**

<img src="https://media.giphy.com/media/e32glxOhqPCLu8kbQ0/giphy-downsized.gif" width="80%">

When a user clicks on a movie card, they are brought to a new page that displays additional details for that movie. If data is missing for a movie's details, a message is shown letting users know that information is unavailable. The user can click the "back" button to navigate back to the home page and view all movies.

**View a movie's details page:**

<img src="https://media.giphy.com/media/4dCXu15rJKMNfmyh57/giphy-downsized.gif" width="80%">

A user can login to their account by clicking the "login" button from any page on the site. A login modal will appear and the user can enter their credentials. If an incorrect email or password is entered, the user is shown an error message letting them know what went wrong. If the credentials are correct, the user is now logged in to their account and is brought back to the page they were previously on.

When logged in, the user has the option to add a rating using the stars on a movie's details page. The user can change their rating as many times as they'd like.

**Login from home page:**

<img src="https://media.giphy.com/media/ofXv8RsfrFU5P4YrOg/giphy.gif" width="80%">

**Login from a movie details page:**

<img src="https://media.giphy.com/media/ZER1jtSlMzDCUMqLsM/giphy.gif" width="80%">

**Login error:**

 <img src="https://media.giphy.com/media/dUyRyYLXv4knvZpVLd/giphy.gif" width="80%">

If an error occurs when trying to access the app, the user is shown an error modal letting them know what went wrong. If there is a 500 error, the user is asked to come back later. For all other errors, the user is shown the error message as well as a link back to the Rancid Tomatillos homepage. For example, if the user enters an incorrect url for a movie details page, they are shown a 404 error and can follow the link back to the home page.

**Error handling:**

 <img src="https://media.giphy.com/media/R12a4a1e8wXB3mxQls/giphy.gif" width="80%">

## Challenges

- This app was built in the short time span of 13 days.
- This was our team's first time implementing React Router, Cypress, Express, and deploying to Heroku. Each of these new technologies came with a learning curve and many hours of research.
- Following the project spec, our team first built out this React app using conditional rendering. Once complete, we then refactored the app using Router to replace the conditional rendering. Refactoring with Router, rather than implementing it from the beginning, seemed to bring additional challenges and complications.
- The api's that are provided for this app are missing information, so the team had to utilize data cleaning and extensive error handling to account for each scenario.

## Future Iterations

- Add a search bar and filter options to main page
- Show user's rating on movie card on home page
- Use a database to store user ratings data so that it persists beyond one session. Our API data is stored in the Express server file, and due to Heroku limitations, any new data does not persist after a user's session.
- Refining the error handling on the login modal (hiding the error message when a user clicks back into the input, do not clear inputs, etc)
- Add the ability for a user to delete their rating from a movie

## Install and Setup

To run this app locally:

1. fork this repository
2. run ```git clone git clone git@github.com:GraceGardner/rancidtomatillos.git``` in your command line
3. Run ```cd rancidtomatillos``` to navigate into the repository
4. Run ```npm install```
5. Run ```npm start```
6. Visit ```http://localhost:3000/``` in your browser to view the Rancid Tomatillos app!
7. Open a second terminal tab and run ```npm run cypress``` (while localhost:3000 is still running) to access the cypress testing for this app

## API

For this project, we access data from two API's.

Movie and user data is accessed via the following API, built by staff at Turing.

[Movie Data API](https://rancid-tomatillos.herokuapp.com/api/v1)

Our team gave ourselves the challenge to learn and implement Express to build an API that stores all user ratings. See both the API and repo below.

[User Ratings API repo](https://github.com/aliroemhildt/user-ratings-api)

[User Ratings API](https://rancidtomatillos-api.netlify.app/.netlify/functions/api/v1/ratings)

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

## Contributors

[Ali Roemhildt](https://github.com/aliroemhildt)

[Grace Gardner](https://github.com/GraceGardner)
