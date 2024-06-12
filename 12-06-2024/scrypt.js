import API_KEY from './key.js';

let currentPage = 1;
let currentEndpoint = 'popular';
let currentContentType = 'movie';
let currentGenre = '';

async function fetchMovies(endpoint, page = 1, genre = '') {
    let url = `https://api.themoviedb.org/3/${currentContentType}/${endpoint}?api_key=${API_KEY}&page=${page}`;
    if (genre) {
        url += `&with_genres=${genre}`;
    }
    console.log(`Fetching movies from: ${url}`);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Errore nella richiesta API');
        }
        const data = await response.json();
        console.log('Data received:', data);
        return data;
    } catch (error) {
        console.error('Si è verificato un errore durante il recupero dei film:', error);
        throw error;
    }
}

async function fetchGenres() {
    const url = `https://api.themoviedb.org/3/genre/${currentContentType}/list?api_key=${API_KEY}`;
    console.log(`Fetching genres from: ${url}`);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Errore nel recupero dei generi');
        }
        const data = await response.json();
        console.log('Genres received:', data);
        return data.genres;
    } catch (error) {
        console.error('Si è verificato un errore durante il recupero dei generi:', error);
        throw error;
    }
}

async function searchMovies(query) {
    const searchEndpoint = `search/${currentContentType}`;
    const searchUrl = `https://api.themoviedb.org/3/${searchEndpoint}?api_key=${API_KEY}&query=${query}`;
    console.log(`Fetching search results from: ${searchUrl}`);

    try {
        const response = await fetch(searchUrl);
        if (!response.ok) {
            throw new Error('Errore nella ricerca');
        }
        const data = await response.json();
        console.log('Data received:', data);
        return data;
    } catch (error) {
        console.error('Si è verificato un errore durante la ricerca:', error);
        throw error;
    }
}

async function changeCategory(endpoint, page = 1, genre = '') {
    currentPage = page;
    currentEndpoint = endpoint;
    console.log(`Changing category to: ${endpoint}, page: ${page}, genre: ${genre}`);
    try {
        const data = await fetchMovies(endpoint, page, genre);
        displayMovies(data.results);
        updatePageNumber();
    } catch (error) {
        console.error('Si è verificato un errore durante il recupero dei film:', error);
    }
}

async function searchMoviesAndUpdateUI() {
    const searchInput = document.getElementById('searchInput').value.trim();
    console.log('Searching for movies with query:', searchInput);
    if (searchInput === '') {
        alert('Inserisci un termine di ricerca.');
        return;
    }

    try {
        const data = await searchMovies(searchInput);
        displayMovies(data.results);
        currentPage = 1;
        updatePageNumber();
    } catch (error) {
        console.error('Si è verificato un errore durante la ricerca:', error);
    }
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('moviesContainer');
    moviesContainer.innerHTML = '';
    console.log('Displaying movies:', movies);

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <h2>${movie.title || movie.name}</h2>
            <img src="${buildPosterUrl(movie.poster_path)}" alt="${movie.title || movie.name} Poster">
            <p>Voto medio: ${movie.vote_average}</p>
            <p>Data di uscita: ${movie.release_date || movie.first_air_date}</p>
            <p>${movie.overview}</p>
        `;
        moviesContainer.appendChild(movieCard);
    });
}

function buildPosterUrl(posterPath) {
    console.log('Building poster URL for:', posterPath);
    if (!posterPath) {
        return '';
    }
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
}

function updatePageNumber() {
    document.getElementById('currentPage').innerText = `Pagina ${currentPage}`;
}

function handlePagination(action) {
    if (action === 'next') {
        currentPage++;
    } else if (action === 'prev' && currentPage > 1) {
        currentPage--;
    }
    changeCategory(currentEndpoint, currentPage, currentGenre);
}

async function populateGenreDropdown() {
    const genreDropdown = document.getElementById('genre');
    genreDropdown.innerHTML = '<option value="">Tutti i generi</option>';

    try {
        const genres = await fetchGenres();
        genres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre.id;
            option.innerText = genre.name;
            genreDropdown.appendChild(option);
        });
    } catch (error) {
        console.error('Errore durante il popolamento dei generi:', error);
    }
}

async function createProduct(productData) {
    const url = 'https://api.escuelajs.co/api/v1/products/';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });
        console.log('Risposta dalla richiesta POST:', response);
        if (!response.ok) {
            throw new Error('Errore nella creazione del prodotto' + response.statusText);
        }
        const data = await response.json();
        console.log('Prodotto creato:', data);
        return data.id; 
    } catch (error) {
        console.error('Si è verificato un errore durante la creazione del prodotto:', error);
        throw error;
    }
}

async function deleteProduct(productId) {
    const url = `https://api.escuelajs.co/api/v1/products/${productId}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Errore nella cancellazione del prodotto');
        }
        console.log(`Prodotto con ID ${productId} cancellato`);
    } catch (error) {
        console.error('Si è verificato un errore durante la cancellazione del prodotto:', error);
        throw error;
    }
}

document.getElementById('popularButton').addEventListener('click', () => changeCategory('popular'));
document.getElementById('topRatedButton').addEventListener('click', () => changeCategory('top_rated'));
document.getElementById('upcomingButton').addEventListener('click', () => changeCategory('upcoming'));
document.getElementById('searchButton').addEventListener('click', searchMoviesAndUpdateUI);
document.getElementById('prevPageButton').addEventListener('click', () => handlePagination('prev'));
document.getElementById('nextPageButton').addEventListener('click', () => handlePagination('next'));


document.getElementById('contentType').addEventListener('change', (event) => {
    currentContentType = event.target.value;
    changeCategory(currentEndpoint, 1, currentGenre);
    populateGenreDropdown();
});

document.getElementById('genre').addEventListener('change', (event) => {
    currentGenre = event.target.value;
    changeCategory(currentEndpoint, 1, currentGenre);
});

document.getElementById('productForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const productData = {
        title: document.getElementById('title').value,
        price: parseFloat(document.getElementById('price').value),
        description: document.getElementById('description').value,
        images: [document.getElementById('image').value],
        categoryId: parseInt(document.getElementById('categoryId').value),
    };

    try {
        const productId = await createProduct(productData);
        alert(`Prodotto creato con ID: ${productId}`);
    } catch (error) {
        alert('Errore nella creazione del prodotto.');
    }
});

document.getElementById('deleteProductButton').addEventListener('click', async () => {
    const productId = parseInt(document.getElementById('deleteProductId').value);
    if (isNaN(productId) || productId <= 0) {
        alert('Inserisci un ID valido.');
        return;
    }

    try {
        await deleteProduct(productId);
        alert(`Prodotto con ID ${productId} cancellato.`);
    } catch (error) {
        alert('Errore nella cancellazione del prodotto.');
    }
});

changeCategory('popular');
populateGenreDropdown();
