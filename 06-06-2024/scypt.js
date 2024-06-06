function loadProducts() {
  console.log('Inizio richiesta per caricare i prodotti...');
  
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Dati prodotti recuperati con successo:', data);
        const container = document.getElementById('products-container');

        
        container.innerHTML = '';

        
        data.forEach(product => {
          console.log('Aggiungo il prodotto al DOM:', product.title);
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');

          
          const productImage = document.createElement('img');
          productImage.src = product.image;
          productImage.alt = product.title;
          productImage.classList.add('product-image');

          
          const productTitle = document.createElement('h2');
          productTitle.textContent = product.title;
          productTitle.classList.add('product-title');

          
          const productPrice = document.createElement('p');
          productPrice.textContent = `Prezzo: $${product.price}`;
          productPrice.classList.add('product-price');

          
          const productDescription = document.createElement('p');
          productDescription.textContent = product.description;
          productDescription.classList.add('product-description');

          
          productCard.appendChild(productImage);
          productCard.appendChild(productTitle);
          productCard.appendChild(productPrice);
          productCard.appendChild(productDescription);

          
          container.appendChild(productCard);
        });

        console.log('Tutti i prodotti sono stati aggiunti al DOM.');
        
      })
      .catch(error => {
        console.error('C\'è stato un problema con la tua richiesta fetch:', error);
      });
}


document.getElementById('load-button').addEventListener('click', loadProducts);