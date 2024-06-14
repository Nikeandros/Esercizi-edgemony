document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.escuelajs.co/api/v1/products';

    const postForm = document.getElementById('postForm');
    const addButton = document.getElementById('addButton');
    const updateButton = document.getElementById('updateButton');
    const selectButton = document.getElementById('selectButton');
    const deleteButton = document.getElementById('deleteButton');
    const fetchButton = document.getElementById('fetchButton');
    const objectList = document.getElementById('objectList');
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.getElementById('loginContainer');
    const appContainer = document.getElementById('appContainer');
    const logoutButton = document.getElementById('logoutButton');
    let currentProductId = null;
    let objectsShown = false;

    function checkLogin() {
        const user = localStorage.getItem('user');
        if (user) {
            loginContainer.style.display = 'none';
            appContainer.style.display = 'block';
        } else {
            loginContainer.style.display = 'block';
            appContainer.style.display = 'none';
        }
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const loginError = document.getElementById('loginError');

        if (username === 'admin' && password === 'password') {
            localStorage.setItem('user', JSON.stringify({ username }));
            checkLogin();
        } else {
            loginError.textContent = 'Credenziali non valide';
            loginError.style.display = 'block';
        }
    });

     logoutButton.addEventListener('click', () => {
        localStorage.removeItem('user');
        checkLogin();
    });

    checkLogin();

    postForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value.trim();
        const price = document.getElementById('price').value.trim();
        const description = document.getElementById('description').value.trim();
        const imageUrl = document.getElementById('imageUrl').value.trim();
        const formError = document.getElementById('formError');

        if (!title || !price || !description || !imageUrl) {
            formError.textContent = 'Tutti i campi sono obbligatori.';
            formError.style.display = 'block';
            return;
        }

        const postData = {
            title: title,
            price: parseFloat(price),
            description: description,
            categoryId: 1,
            images: [imageUrl]
        };

        try {
            let response;
            if (currentProductId) {
                response = await fetch(`${apiUrl}/${currentProductId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                });
            } else {
                response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                });
            }

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Errore nella richiesta: ${errorData.message}`);
            }

            const data = await response.json();
            alert(`Oggetto creato/modificato con ID: ${data.id}`);
            currentProductId = null;
            postForm.reset();
            formError.style.display = 'none';
        } catch (error) {
            formError.textContent = 'Errore durante la creazione/modifica dell\'oggetto: ' + error.message;
            formError.style.display = 'block';
        }
    });

    updateButton.addEventListener('click', async () => {
        postForm.dispatchEvent(new Event('submit'));
    });

    deleteButton.addEventListener('click', async () => {
        const deleteId = document.getElementById('deleteId').value;
        if (!deleteId) {
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/${deleteId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                const deleteFeedback = document.getElementById('deleteFeedback');
                deleteFeedback.style.display = 'block';
                setTimeout(() => {
                    deleteFeedback.style.display = 'none';
                }, 3000);

                const objectToRemove = document.querySelector(`.object-item[data-id="${deleteId}"]`);
                if (objectToRemove) {
                    objectToRemove.remove();
                }
            }
        } catch (error) {
            console.error('Errore durante la rimozione dell\'oggetto:', error);
        }
    });

    selectButton.addEventListener('click', async () => {
        const selectId = document.getElementById('selectId').value;
        const selectError = document.getElementById('selectError');
        if (!selectId) {
            selectError.textContent = 'Nessun ID di selezione fornito';
            selectError.style.display = 'block';
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/${selectId}`);
            if (!response.ok) {
                throw new Error('Errore durante il recupero dell\'oggetto');
            }
            const data = await response.json();
            currentProductId = data.id;
            document.getElementById('title').value = data.title;
            document.getElementById('price').value = data.price;
            document.getElementById('description').value = data.description;
            document.getElementById('imageUrl').value = data.images[0];
            selectError.style.display = 'none';
        } catch (error) {
            selectError.textContent = 'Il prodotto che stai cercando non esiste';
            selectError.style.display = 'block';
        }
    });

    fetchButton.addEventListener('click', async () => {
        try {
            if (!objectsShown) {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Errore durante il recupero degli oggetti');
                }
                const data = await response.json();
                renderObjects(data);
                fetchButton.textContent = 'Nascondi oggetti';
                objectsShown = true;
            } else {
                clearObjects();
                fetchButton.textContent = 'Mostra oggetti';
                objectsShown = false;
            }
        } catch (error) {
            console.error('Errore durante il recupero degli oggetti:', error);
        }
    });

    function renderObjects(data) {
        objectList.innerHTML = '';
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('object-item');
            itemElement.setAttribute('data-id', item.id);
            itemElement.innerHTML = `
                <p>ID: ${item.id}</p>
                <p>Titolo: ${item.title}</p>
                <p>Prezzo: ${item.price}</p>
                <img src="${item.images[0]}" alt="Immagine prodotto">
            `;
            objectList.appendChild(itemElement);
        });
    }

    function clearObjects() {
        objectList.innerHTML = '';
    }
});
