// ESERCIZIO 1

const risposte = []; // Array per salvare tutte le risposte
let score = 0;
let risposta;

// Domanda 1
risposta = prompt("Qual è la capitale dell'Italia?\nA) Milano\nB) Roma\nC) Napoli");
risposte.push(risposta.toLowerCase()); // Aggiungiamo la risposta all'array

switch (risposta.toLowerCase()) {
    case "b":
        score += 3;
        break;
    default:
        score -= 1;
}

// Domanda 2
risposta = prompt("Quale è l'elemento chimico con simbolo 'O'?\nA) Ossigeno\nB) Oro\nC) Carbonio");
risposte.push(risposta.toLowerCase()); // Aggiungiamo la risposta all'array

switch (risposta.toLowerCase()) {
    case "a":
        score += 3;
        break;
    default:
        score -= 1;
}

// Domanda 3
risposta = prompt("Chi scrisse 'La Divina Commedia'?\nA) Dante Alighieri\nB) Giovanni Boccaccio\nC) Petrarca");
risposte.push(risposta.toLowerCase()); // Aggiungiamo la risposta all'array

switch (risposta.toLowerCase()) {
    case "a":
        score += 3;
        break;
    default:
        score -= 1;
}

// Domanda 4
risposta = prompt("Quante stagioni ha un anno?\nA) Una\nB) Due\nC) Quattro");
risposte.push(risposta.toLowerCase()); // Aggiungiamo la risposta all'array

switch (risposta.toLowerCase()) {
    case "c":
        score += 3;
        break;
    default:
        score -= 1;
}

// Mostriamo tutte le risposte date dall'utente
console.log("Tutte le risposte date:", risposte, "Lunghezza:", risposte.length);

// Mostriamo il punteggio complessivo
console.log("Il tuo punteggio complessivo è:", score);

// Se tutte le risposte sono corrette, mostriamo un messaggio speciale
if (score === 12) {
    console.log("Sei il nuovo campione!");
}

// ESERCIZIO 2

// Raccogliamo le parole dall'utente tramite prompt
const parola1 = prompt("Inserisci la prima parola:");
const parola2 = prompt("Inserisci la seconda parola:");
const parola3 = prompt("Inserisci la terza parola:");

// Funzione per determinare se la prima lettera è una vocale o una consonante
const determinaTipoLettera = (parola) => {
    const primaLettera = parola.charAt(0).toLowerCase();
    const isVocale = 'aeiou'.includes(primaLettera);
    return isVocale ? "vocale" : "consonante";
};

// Mostrare in console se la prima lettera di ciascuna parola è vocale o consonante
console.log(`La prima lettera di "${parola1}" è ${determinaTipoLettera(parola1)}`);
console.log(`La prima lettera di "${parola2}" è ${determinaTipoLettera(parola2)}`);
console.log(`La prima lettera di "${parola3}" è ${determinaTipoLettera(parola3)}`);


// ESERCIZIO 3

const string = prompt('Inserisci una parola:');

// Controlliamo se è una stringa valida
if (typeof string === 'string' && string.length > 0) {
    const array = string.split(''); // Trasformiamo la stringa in un array di caratteri
    const reversedString = array.reverse().join(''); // Invertiamo l'ordine degli elementi e uniamo per formare la stringa rovesciata
    console.log("Parola al rovescio:", reversedString);
} else {
    console.log("Inserisci una parola valida.");
}
