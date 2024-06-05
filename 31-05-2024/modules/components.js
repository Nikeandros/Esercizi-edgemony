const cardElGen = (obj) => {
    // Create the main card container
    const card = document.createElement('div');
    card.classList.add('card', obj.category); 

    // Create the card header
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    
    const cardIcon = document.createElement('img');
    cardIcon.classList.add('card-icon');
    cardIcon.src = obj.iconSrc; 
    cardIcon.alt = 'icon task type';

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = obj.title;

    cardHeader.appendChild(cardIcon);
    cardHeader.appendChild(cardTitle);

    // Create the card description

 // Create the card description
    const cardDescriptionBox = document.createElement('div');
    cardDescriptionBox.classList.add('card-description-box');
    
    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.textContent = obj.description; // Assume che obj abbia una proprietà description

    cardDescriptionBox.appendChild(cardDescription); // Aggiunge la descrizione alla scatola della descrizione



    // Create the card due date
    const cardDueDate = document.createElement('p');
    cardDueDate.classList.add('card-due-date');
    cardDueDate.textContent = `Deadline: ${obj.dueDate}`; 

    // Create the card footer
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    const editIcon = document.createElement('img');
    editIcon.classList.add('card-footer-icon');
    editIcon.src = './icons/icon-park-outline--edit.png';
    editIcon.alt = 'edit';

    const deleteIcon = document.createElement('img');
    deleteIcon.classList.add('card-footer-icon');
    deleteIcon.src = './icons/icon-park-outline--delete-five.png';
    deleteIcon.alt = 'delete';

    const doneIcon = document.createElement('img');
    doneIcon.classList.add('card-footer-icon');
    doneIcon.src = './icons/icon-park-outline--done-all.png';
    doneIcon.alt = 'done';

    // Aggiungiamo il listener per il click sull'icona di eliminazione
    deleteIcon.addEventListener('click', function() {
        card.remove(); // Rimuoviamo la carta quando l'icona di eliminazione viene cliccata
    });

    cardFooter.appendChild(editIcon);
    cardFooter.appendChild(deleteIcon);
    cardFooter.appendChild(doneIcon);

    // Assemble the card
  card.appendChild(cardHeader); // Aggiunge l'intestazione alla carta
  card.appendChild(cardDescriptionBox); // Aggiunge la scatola della descrizione alla carta
  card.appendChild(cardDueDate); // Aggiunge la data di scadenza alla carta
  card.appendChild(cardFooter); // Aggiunge il piè di pagina alla carta

    // Append the card to the container
    document.querySelector('.todo-container').appendChild(card);

    return card;
}

const cardListGen = () => {
    const cardList = document.createElement('section');
    cardList.className = 'card-container';
    return cardList;
}

const buttonGen = (text, id) => {
	const button = document.createElement('button');

	button.textContent = text;
	button.id = id;

	return button
}

export {
    cardElGen,
    cardListGen,
    buttonGen
}
