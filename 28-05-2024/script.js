import { tasks } from "./data/task.js";
import { cardElGen, cardListGen } from "./modules/components.js";
import { buttons } from "./data/button.js"


window.onload = () => {
    const mainSectionEl = document.querySelector('.main');
    const cardList = cardListGen();

    for (let i = 0; i < tasks.length; i++) {
        const cardEl = cardElGen(tasks[i]);
        cardList.append(cardEl);
    }

    mainSectionEl.append(cardList);
};