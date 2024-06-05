
function logThis() {
    console.log(this);
}


document.addEventListener('DOMContentLoaded', (event) => {
    const parentDiv = document.getElementById('parentDiv');
    const openModalBtn = document.getElementById('openModalBtn');
    const openModalWithNameBtn = document.getElementById('openModalWithNameBtn');
    const nameInput = document.getElementById('nameInput');

    parentDiv.addEventListener('click', (event) => {
        const clickedElement = event.target;

        
        logThis.call(clickedElement);

        if (clickedElement.id === 'button1') {
            console.log('Button 1 clicked');
        } else if (clickedElement.id === 'button2') {
            console.log('Button 2 clicked');
        } else if (clickedElement.id === 'button3') {
            console.log('Button 3 clicked');
        }
    });

    openModalBtn.addEventListener('click', () => {
        createModal();
    });

    openModalWithNameBtn.addEventListener('click', () => {
        const name = nameInput.value;
        createModal(`Benvenuto ${name}`);
    });
});

function createModal(message) {
    
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => {
        closeModal(modal);
    };

    const yesButton = document.createElement('button');
    yesButton.innerText = 'YES';
    yesButton.onclick = () => {
        console.log('YES clicked');
    };

    const noButton = document.createElement('button');
    noButton.innerText = 'NO';
    noButton.onclick = () => {
        console.log('NO clicked');
    };

    const timerText = document.createElement('p');
    timerText.innerText = 'Modal will close in 5 seconds';

    const messageText = document.createElement('p');
    messageText.innerText = message || 'Welcome!';

    modalContent.appendChild(closeButton);
    modalContent.appendChild(messageText);
    modalContent.appendChild(timerText);
    modalContent.appendChild(yesButton);
    modalContent.appendChild(noButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    
    modal.style.display = 'flex';

    
    let timeLeft = 5;
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerText.innerText = `Modal will close in ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

    
    setTimeout(() => {
        closeModal(modal);
    }, 5000);

    
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    };
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.removeChild(modal);
}
