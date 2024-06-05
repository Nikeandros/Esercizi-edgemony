import { tasks } from "./data/task.js";
import { cardElGen, cardListGen } from "./modules/components.js";

const newTask = {
    id: 21,
    title: 'New Task!',
    description: 'Ecco qui la nostra nuova carta bellissima ciao!',
    category: 'personal-task',
    iconSrc: './icons/icon-park-outline--user.png',
    dueDate: '2024-06-01',
};

const mainSectionEl = document.querySelector('.main');
const cardContainerEl = document.querySelector('.card-container');
const btnAdd = document.querySelector('.add-card');

const renderListCard = () => {
    // Salva un riferimento alla tua "add card"
    const addCard = document.querySelector('.add-card');

    // Svuota il contenitore delle carte
    cardContainerEl.innerHTML = "";

    // Crea e aggiungi le carte al contenitore
    const cardList = cardListGen();
    cardList.classList.add('card-container');  // Assicurati che il contenitore abbia la stessa classe

    for (let i = 0; i < tasks.length; i++) {
        const cardEl = cardElGen(tasks[i]);
        cardList.append(cardEl);
    }

    // Inserisci la "add card" in cima
    cardList.insertBefore(addCard, cardList.firstChild);

    // Inserisci il contenitore delle carte nel main
    mainSectionEl.innerHTML = "";  // Svuota il main prima di aggiungere il contenitore aggiornato
    mainSectionEl.append(cardList);

    return cardList;
};

window.onload = () => {
    renderListCard();
};

btnAdd.addEventListener("click", function () {
    tasks.push(newTask);
    renderListCard();
});