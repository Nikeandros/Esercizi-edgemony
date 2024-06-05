
// Esercizio 1

// Seleziona l'elemento con id heading e stampa il suo contenuto
const headingEl = document.querySelector('#heading');
console.log(headingEl);

// Seleziona tutti gli elementi button
const buttonEls = document.querySelectorAll('button');

// Itera su tutti gli elementi button e stampa il loro testo
buttonEls.forEach(button => {
    console.log(button.textContent);
});


// Esercizio 2

// Seleziona i due bottoni
const resetBtn = document.querySelector('#resetBtn');
const clickBtn = document.querySelector('#clickBtn');

// Funzione per il bottone reset
resetBtn.onclick = function() {
    clickBtn.innerHTML = "0";
};

// Funzione per il bottone click
clickBtn.onclick = function() {
    // Legge il valore attuale di innerHTML
    let currentValue = clickBtn.innerHTML;

    // Converte il valore a numero, se NaN lo porta a 0
    let numericValue = parseInt(currentValue, 10);
    if (isNaN(numericValue)) {
        numericValue = 0;
    }

    // Incrementa il valore e lo salva in innerHTML
    numericValue += 1;
    clickBtn.innerHTML = numericValue; 
}