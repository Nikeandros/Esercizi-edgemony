import { tasks } from "./data/task.js";
import { cardElGen, cardListGen } from "./modules/components.js";

const newTasks = [
    {
        id: 21,
        title: 'New Task 1',
        description: 'Description for task 1',
        category: 'personal-task',
        iconSrc: './icons/icon-park-outline--user.png',
        dueDate: '2024-06-01',
    },
    {
        id: 22,
        title: 'New Task 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'work-task',
        iconSrc: './icons/icon-park-outline--handbag.png',
        dueDate: '2024-06-02',
    },
    {
        id: 23,
        title: 'New Task 3',
        description: 'Description for task 3',
        category: 'urgent-personal-task',
        iconSrc: './icons/icon-park-outline--user.png',
        dueDate: '2024-06-03',
    },
    {
        id: 24,
        title: 'New Task 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'urgent-work-task',
        iconSrc: './icons/icon-park-outline--handbag.png',
        dueDate: '2024-06-04',
    },
    {
        id: 25,
        title: 'New Task 5',
        description: 'Description for task 5',
        category: 'personal-task',
        iconSrc: './icons/icon-park-outline--user.png',
        dueDate: '2024-06-05',
    }
];

const mainSectionEl = document.querySelector('.main');
const cardContainerEl = document.querySelector('.card-container');
const btnAdd = document.querySelector('.add-card');
const warningMessageEl = document.getElementById('warning-message');
const dismissWarningBtn = document.getElementById('dismiss-warning');

const renderListCard = () => {
    const addCard = document.querySelector('.add-card');
    cardContainerEl.innerHTML = "";
    const cardList = cardListGen();
    cardList.classList.add('card-container');

    tasks.forEach(task => {
        const cardEl = cardElGen(task);
        cardList.prepend(cardEl);
    });

    cardList.insertBefore(addCard, cardList.firstChild);
    mainSectionEl.innerHTML = "";
    mainSectionEl.prepend(cardList);

    return cardList;
};

window.onload = () => {
    renderListCard();
};

const showWarningMessage = (message) => {
    warningMessageEl.querySelector('p').textContent = message;
    warningMessageEl.style.display = 'block';
};

const hideWarningMessage = () => {
    warningMessageEl.style.display = 'none';
};

dismissWarningBtn.addEventListener('click', hideWarningMessage);

btnAdd.addEventListener("click", function () {
    // Seleziona casualmente una task dal nuovo array di tasks
    const randomTask = newTasks[Math.floor(Math.random() * newTasks.length)];

    const taskExists = tasks.some(task => 
        task.id === randomTask.id && 
        task.title === randomTask.title && 
        task.dueDate === randomTask.dueDate);

    if (taskExists) {
        showWarningMessage("Hey, il TODO esiste già!");
    } else {
        tasks.push(randomTask);
        renderListCard();
    }
});