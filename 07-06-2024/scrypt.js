import API_KEY from './key.js';


function fetchMovies(endpoint, page = 1) {
  const url = `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${API_KEY}&page=${page}`;
  console.log(`Fetching movies from: ${url}`);

  return fetch(url)
    .then(response => {
      console.log('Received response:', response);
      if (!response.ok) {
        throw new Error('Errore nella richiesta API');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data received:', data);
      return data;
    });
}


function buildPosterUrl(posterPath) {
  console.log('Building poster URL for:', posterPath);
  if (!posterPath) {
    
    return '';
  }
  
  return `https://image.tmdb.org/t/p/w500/${posterPath}`;
}


function displayMovies(movies) {
  const moviesContainer = document.getElementById('moviesContainer');
  moviesContainer.innerHTML = '';
  console.log('Displaying movies:', movies);

  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
      <h2>${movie.title}</h2>
      <img src="${buildPosterUrl(movie.poster_path)}" alt="${movie.title} Poster">
      <p>Voto medio: ${movie.vote_average}</p>
      <p>Data di uscita: ${movie.release_date}</p>
      <p>${movie.overview}</p>
    `;
    moviesContainer.appendChild(movieCard);
  });
}


function searchMovies() {
  const searchInput = document.getElementById('searchInput').value.trim();
  console.log('Searching for movies with query:', searchInput);
  if (searchInput === '') {
    alert('Inserisci un termine di ricerca.');
    return;
  }

  const searchEndpoint = `search/movie`;
  const searchUrl = `https://api.themoviedb.org/3/${searchEndpoint}?api_key=${API_KEY}&query=${searchInput}`;
  console.log(`Fetching search results from: ${searchUrl}`);

  fetch(searchUrl)
    .then(response => {
      console.log('Received response:', response);
      if (!response.ok) {
        throw new Error('Errore nella ricerca');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data received:', data);
      displayMovies(data.results);
    })
    .catch(error => {
      console.error('Si è verificato un errore durante la ricerca:', error);
    });
}


function changeCategory(endpoint) {
  console.log(`Changing category to: ${endpoint}`);
  fetchMovies(endpoint)
    .then(data => {
      displayMovies(data.results);
    })
    .catch(error => {
      console.error('Si è verificato un errore durante il recupero dei film:', error);
    });
}

changeCategory('popular');

document.getElementById('popularButton').addEventListener('click', () => changeCategory('popular'));
document.getElementById('topRatedButton').addEventListener('click', () => changeCategory('top_rated'));
document.getElementById('upcomingButton').addEventListener('click', () => changeCategory('upcoming'));

document.getElementById('searchButton').addEventListener('click', searchMovies);
