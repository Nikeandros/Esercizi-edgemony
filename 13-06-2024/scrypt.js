document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.escuelajs.co/api/v1/products';

    const postForm = document.getElementById('postForm');
    const addButton = document.getElementById('addButton');
    const updateButton = document.getElementById('updateButton');
    let currentProductId = null;

    postForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('Submit form triggered');
        
        const title = document.getElementById('title').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const formError = document.getElementById('formError');

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
                console.log(`Updating product with ID: ${currentProductId}`);
                response = await fetch(`${apiUrl}/${currentProductId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                });
            } else {
                console.log('Adding new product');
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
            console.log('Oggetto creato/modificato con ID:', data.id);
            alert(`Oggetto creato/modificato con ID: ${data.id}`);
            currentProductId = null;
            postForm.reset();
            formError.style.display = 'none';
        } catch (error) {
            formError.textContent = 'Errore durante la creazione/modifica dell\'oggetto: ' + error.message;
            formError.style.display = 'block';
            console.error('Errore durante la creazione/modifica dell\'oggetto:', error);
        }
    });

    updateButton.addEventListener('click', async () => {
        console.log('Update button clicked');
        postForm.dispatchEvent(new Event('submit'));
    });

    const deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener('click', async () => {
        const deleteId = document.getElementById('deleteId').value;
        if (!deleteId) {
            console.log('Nessun ID di eliminazione fornito');
            return;
        }

        try {
            console.log(`Deleting product with ID: ${deleteId}`);
            const response = await fetch(`${apiUrl}/${deleteId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                const deleteFeedback = document.getElementById('deleteFeedback');
                deleteFeedback.style.display = 'block';
                setTimeout(() => {
                    deleteFeedback.style.display = 'none';
                }, 3000);
                console.log(`Oggetto con ID ${deleteId} rimosso dalla API`);

                
                const objectToRemove = document.querySelector(`.object-item[data-id="${deleteId}"]`);
                if (objectToRemove) {
                    objectToRemove.remove();
                    console.log(`Oggetto con ID ${deleteId} rimosso dalla pagina`);
                } else {
                    console.log(`Oggetto con ID ${deleteId} non trovato nella pagina`);
                }

            } else {
                console.error('Errore durante la rimozione dell\'oggetto');
            }
        } catch (error) {
            console.error('Errore durante la rimozione dell\'oggetto:', error);
        }
    });

    const selectButton = document.getElementById('selectButton');
    selectButton.addEventListener('click', async () => {
        const selectId = document.getElementById('selectId').value;
        if (!selectId) {
            console.log('Nessun ID di selezione fornito');
            return;
        }

        try {
            console.log(`Fetching product with ID: ${selectId}`);
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
            console.log(`Oggetto con ID ${selectId} caricato nei campi di input`);
        } catch (error) {
            console.error('Errore durante il recupero dell\'oggetto:', error);
        }
    });

    let objectsShown = false;
    const fetchButton = document.getElementById('fetchButton');
    const objectList = document.getElementById('objectList');

    fetchButton.addEventListener('click', async () => {
        try {
            if (!objectsShown) {
                console.log('Fetching objects from API');
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Errore durante il recupero degli oggetti');
                }
                const data = await response.json();
                renderObjects(data);
                fetchButton.textContent = 'Nascondi oggetti';
                objectsShown = true;
                console.log('Oggetti caricati e mostrati sulla pagina');
            } else {
                console.log('Clearing objects from the page');
                clearObjects();
                fetchButton.textContent = 'Mostra oggetti';
                objectsShown = false;
                console.log('Oggetti nascosti dalla pagina');
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
                <img src="${item.images[0]}" alt="Immagine prodotto"> <!-- Mostra l'immagine -->
            `;
            objectList.appendChild(itemElement);
        });
        console.log('Oggetti renderizzati sulla pagina:', data);
    }

    function clearObjects() {
        objectList.innerHTML = '';
        console.log('Oggetti rimossi dalla pagina');
    }
});
