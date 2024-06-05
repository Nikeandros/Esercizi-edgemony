// esercizio 1

let frase1 = "Ciao Mondo!";
let frase2 = 'Mio zio viene dalla città di l\'Aquila';
let fraseConcatenata = `

${frase1} sai che  

${frase2}`;

console.log(fraseConcatenata);


// esercizio 2

let frase3 = fraseConcatenata.toUpperCase();
console.log(frase3);


// esercizio 3

let datoUtente = prompt("Inserisci qualcosa");


console.log(datoUtente);

console.log(datoUtente.toLowerCase())


// esercizio 4

let numero = prompt('Dammi un numero da uno a dieci!');


    if(Number(numero) > 7 ) {
      console.log('Vincitore!')
    } else if(Number(numero) <= 7) {
        console.log("Ritenta!")
    }
   

