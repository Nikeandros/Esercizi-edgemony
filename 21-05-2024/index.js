
// ESERCIZIO 1

function clear() {
    console.clear();
}

// Esegui la funzione
clear();


// ESERCIZIO 2

function capitalize(string) {
    if (typeof string !== 'string' || string.length === 0) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Test della funzione
console.log(capitalize('ciao'));    // Ciao
console.log(capitalize('mondo'));   // Mondo
console.log(capitalize('Mondo'));   // Mondo
console.log(capitalize('TEST'));    // Test


// ESERCIZIO 3

function min(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN; // Ritorna NaN se uno dei due parametri non è un numero
    }
    return a < b ? a : b;
}

// Test della funzione
console.log(min(1, 3));     // 1
console.log(min(5, -3));    // -3
console.log(min(100, 20));  // 20


// ESERCIZIO 4

function potenza(base, esponente) {
    if (typeof base !== 'number' || typeof esponente !== 'number') {
        return NaN; // Ritorna NaN se uno dei due parametri non è un numero
    }
    let risultato = 1;
    for (let i = 0; i < esponente; i++) {
        risultato *= base;
    }
    return risultato;
}

// Test della funzione
console.log(potenza(4, 2));    // 16
console.log(potenza(5, 3));    // 125
console.log(potenza(1, 100));  // 1


// ESERCIZIO 5

function potenzaBeta(base, esponente) {
    if (typeof base !== 'number' || typeof esponente !== 'number') {
        return NaN; // Ritorna NaN se uno dei due parametri non è un numero
    }
    if (esponente === 0) return 1;
    let risultato = 1;
    for (let i = 0; i < esponente; i++) {
        risultato *= base;
    }
    return risultato;
}


function factorial(n) {
    if (typeof n !== 'number' || n < 0) {
        return NaN; // Ritorna NaN se il parametro non è un numero positivo
    }
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Test della funzione
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24



