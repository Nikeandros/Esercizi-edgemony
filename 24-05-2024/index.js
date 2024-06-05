// Creazione degli elementi h1 e p
const container = document.getElementById('container');

// Creazione dell'elemento h1
const h1 = document.createElement('h1');
h1.textContent = "Titolo Generato con JS";
container.insertAdjacentElement('afterbegin', h1);

// Creazione dell'elemento p
const p = document.createElement('p');
p.textContent = "Questo paragrafo è stato creato e aggiunto tramite JavaScript.";
container.append(p);

// Creazione del button con contatore
const button = document.createElement('button');
button.textContent = '0';
container.append(button);

// Evento onmouseenter per cambiare lo stile del button
button.onmouseenter = function() {
    button.style.backgroundColor = 'lightblue';
    button.style.color = 'white';
    button.style.border = '2px solid darkblue';
    button.style.fontSize = '16px';
};

// Evento onclick per incrementare il contatore del button
button.onclick = function() {
    let count = parseInt(button.textContent);
    button.textContent = count + 1;
};

// Gestione del form per la lista di nomi
const formEl = document.querySelector('form');
const inputEl = document.getElementById('nomi');
const ulEl = document.querySelector('.list');

formEl.onsubmit = function(event) {
    event.preventDefault(); // Previene il comportamento di default del form

    const inputValue = inputEl.value.trim();

    // Controlla se la stringa è valida e contiene almeno uno spazio
    if (inputValue.length >= 3 && inputValue.includes(' ')) {
        // Creazione del nuovo elemento li
        const li = document.createElement('li');
        li.textContent = inputValue;
        
        // Aggiunta del li all'ul
        ulEl.append(li);

        // Aggiunta dell'evento click al nuovo elemento li
        li.onclick = function() {
            console.log('Elemento cliccato:', li.textContent);
        };

        // Resetta il valore dell'input
        inputEl.value = '';
    } else {
        alert('Per favore, inserisci un nome e cognome valido.');
    }
};
