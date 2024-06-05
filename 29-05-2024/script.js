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

const btnAdd = document.querySelector('.add-card');

const renderListCard = () => {
	mainSectionEl.innerHTML = ""

	const cardList = cardListGen();

    for (let i = 0; i < tasks.length; i++) {
        const cardEl = cardElGen(tasks[i]);
        cardList.append(cardEl);
    }

	return cardList
};

window.onload = mainSectionEl.append(renderListCard());

btnAdd.addEventListener("click", function () {
	tasks.push(newTask)
	mainSectionEl.append(renderListCard())
})
