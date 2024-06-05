// Creiamo un elemento button
var button = document.createElement("button");

// Aggiungiamo del testo al pulsante
button.innerHTML = "Clicca qui";

// Aggiungiamo un gestore di eventi al pulsante
button.addEventListener("click", function() {
    alert("Hai cliccato sul pulsante!");
});

// Aggiungiamo il pulsante al body del documento
document.body.appendChild(button);
