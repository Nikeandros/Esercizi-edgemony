// ESERCIZIO 1


const numbers = [-1, -2, -10, 2, 5];

// 1. Stampare in console solo i numeri > 0
console.log("Numeri maggiori di 0:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        console.log(numbers[i]);
    }
}

// 2. Interrompere al primo numero > 0 l'esecuzione del for (break)
console.log("Interrompere al primo numero > 0:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        console.log(numbers[i]);
        break; // Interrompe il ciclo al primo numero maggiore di 0
    }
}


// ESERCIZIO 2

// Prendere una parola dall'utente tramite prompt
let parola = prompt("Inserisci una parola:");

// Convertire la parola in un array di caratteri
let arrayCaratteri = parola.split('');

// Variabile per tenere traccia del risultato
let isPalindromo = true;

// Usare un ciclo for per controllare i caratteri speculari
for (let i = 0; i < arrayCaratteri.length / 2; i++) {
    // Confrontare il carattere corrente con il suo elemento specchio
    if (arrayCaratteri[i] !== arrayCaratteri[arrayCaratteri.length - i - 1]) {
        console.log("Errore! Non è un palindromo.");
        isPalindromo = false;
        break;
    }
}

// Se abbiamo completato il ciclo senza trovare errori, la parola è un palindromo
if (isPalindromo) {
    console.log("Successo! È un palindromo!");
}
