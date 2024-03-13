import { cleanData, cleanAllData } from './utilities.js';

const api = {

  get(path) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
      .then(response => {
        if (!response.ok) {
          if (response.status >= 500) {
            throw new Error(`${response.status} ${response.statusText}. We're having some trouble loading the page. Please try again later!`);
          } else if (response.status === 404){
            throw new Error(`${response.status} ${response.statusText}. Oh no! Looks like this was a rancid tomatillo.`);
          } else {
            throw new Error(`${response.status} ${response.statusText}. Oops! Something went wrong. Please reload the page and try agian.`);
          }
        }
        return response.json()
      })
  },

  getSingleMovie(id) {
    return api.get(`movies/${id}`)
      .then(data => {
        return cleanData(data.movie)
      })
  },

  getAllMovies() {
    return api.get('movies')
      .then(data => {
        return cleanAllData(data.movies)
      })
  },

  postUser(userEmail, userPassword) {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: 'post',
      body: JSON.stringify({
        email: `${userEmail}`,
        password: `${userPassword}`
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
  },

  getRatings() {
    return fetch('https://rancidtomatillos-api.netlify.app/.netlify/functions/api/v1/ratings')
      .then(response => response.json())
  },

  postRating(request) {
    return fetch('https://rancidtomatillos-api.netlify.app/.netlify/functions/api/v1/ratings', {
      method: 'post',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }
};

export default api;
