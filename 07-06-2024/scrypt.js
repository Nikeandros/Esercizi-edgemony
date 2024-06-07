import API_KEY from './key.js';

// Funzione per effettuare la chiamata all'API di MovieDB
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

// Funzione per costruire l'URL dell'immagine del poster
function buildPosterUrl(posterPath) {
  console.log('Building poster URL for:', posterPath);
  if (!posterPath) {
    // Se il percorso del poster non è disponibile, restituisci una stringa vuota
    return '';
  }
  // Costruisci l'URL completo dell'immagine del poster utilizzando il percorso del poster e la base URL di TMDb per le immagini
  return `https://image.tmdb.org/t/p/w500/${posterPath}`;
}

// Funzione per stampare le card dei film nel DOM
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

// Funzione per gestire la ricerca di film
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

// Funzione per gestire il cambio di categoria
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

// Effettua la chiamata iniziale all'API di MovieDB e visualizza i film popolari all'avvio
changeCategory('popular');

// Aggiungi un event listener ai bottoni delle categorie
document.getElementById('popularButton').addEventListener('click', () => changeCategory('popular'));
document.getElementById('topRatedButton').addEventListener('click', () => changeCategory('top_rated'));
document.getElementById('upcomingButton').addEventListener('click', () => changeCategory('upcoming'));

// Aggiungi un event listener al bottone di ricerca
document.getElementById('searchButton').addEventListener('click', searchMovies);
