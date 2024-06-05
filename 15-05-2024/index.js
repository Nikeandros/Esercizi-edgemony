// Chiediamo all'utente di inserire il suo nome tramite prompt
let firstName = prompt("Inserisci il tuo nome:");

// Verifichiamo se il nome è valido
if (firstName === null || firstName.length < 3) {
    alert("Nome non valido. Deve contenere almeno 3 caratteri.");
    window.location.reload(); // Ricarichiamo la pagina
}

// Chiediamo all'utente di inserire il suo cognome tramite prompt
let lastName = prompt("Inserisci il tuo cognome:");

// Verifichiamo se il cognome è valido
if (lastName === null || lastName.length < 3) {
    alert("Cognome non valido. Deve contenere almeno 3 caratteri.");
    window.location.reload(); // Ricarichiamo la pagina
}

// Trasformiamo la prima lettera del nome in maiuscolo
const firstLetter = firstName.charAt(0).toUpperCase();
const nameWithoutFirstLetter = firstName.slice(1);
const firstNameWithCapitalize = firstLetter + nameWithoutFirstLetter;
console.log("Nome inserito:", firstName);
console.log("Nome con la prima lettera in maiuscolo:", firstNameWithCapitalize);

// Trasformiamo la prima lettera del cognome in maiuscolo
const firstLetterLastName = lastName.charAt(0).toUpperCase();
const lastNameWithoutFirstLetter = lastName.slice(1);
const lastNameWithCapitalize = firstLetterLastName + lastNameWithoutFirstLetter;
console.log("Cognome inserito:", lastName);
console.log("Cognome con la prima lettera in maiuscolo:", lastNameWithCapitalize);

// Mostriamo il saluto con alert
alert("Ciao " + firstNameWithCapitalize + " " + lastNameWithCapitalize);


let score = 0;

// Domanda 1
let answer1 = prompt("Qual è la capitale dell'Italia?");
switch (answer1.toLowerCase()) {
    case "roma":
        score += 3;
        break;
    default:
        score -= 1;
}

// Domanda 2
let answer2 = prompt("Quale è l'elemento chimico con simbolo 'O'?");
switch (answer2.toLowerCase()) {
    case "ossigeno":
        score += 3;
        break;
    default:
        score -= 1;
}

// Domanda 3
let answer3 = prompt("Chi scrisse 'La Divina Commedia'?");
switch (answer3.toLowerCase()) {
    case "dante alighieri":
        score += 3;
        break;
    default:
        score -= 1;
}

// Domanda 4
let answer4 = prompt("Quante stagioni ha un anno?");
switch (answer4.toLowerCase()) {
    case "quattro":
        score += 3;
        break;
    default:
        score -= 1;
}

// Mostriamo il punteggio complessivo
alert("Il tuo punteggio complessivo è: " + score);

// Se tutte le risposte sono corrette, mostriamo un alert speciale
if (score === 12) {
    alert("Sei il nuovo campione!");
}

