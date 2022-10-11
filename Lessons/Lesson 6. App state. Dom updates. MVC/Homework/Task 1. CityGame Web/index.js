const PLAYSERS = {
    FIRST: 'first',
    SECOND: 'second',
};

const BLOCKS = {
    START: 'start',
    GAME: 'game',
    FINISH: 'finish',
};

const updateNames = (players) => {
    Object.keys(players).forEach((player) => {
        const nameElement = document.querySelector('.cities__user-name--' + player);
        nameElement.textContent = players[player];
        const input = document.getElementById('name-' + player);
        input.value = '';
    });
};

const updateActiveBlock = (state) => {
    const blocks = document.querySelectorAll('.cities__main-block');
    [ ...blocks ].forEach((block) => {
        block.classList.remove('active');
    });
    const newActiveBlock = document.querySelector('.cities__' + state.activeBlock + '-block');
    newActiveBlock.classList.add('active');
};


const setCitiesGame = () => {
    // Состоние приложения - слой Model
    const state = {
        activeBlock: BLOCKS.START,
        activePlayer: PLAYSERS.FIRST,
        cities: [],
        players: {
            first: '',
            second: '',
        },
    };

    const startButton = document.querySelector('.cities__button--start');

    // Мозги приложения - слой Controller
    startButton.addEventListener('click', () => {
        const firstPlayerInput = document.getElementById('name-first');
        const secondPlayerInput = document.getElementById('name-second');

        state.players.first = firstPlayerInput.value;
        state.players.second = secondPlayerInput.value;
        if (state.players.first === '' || state.players.second === '') {
            alert('Введите непустое имя!');
        } else {
            state.activeBlock = BLOCKS.GAME;

            // Функции рендеринга - работа со слоем View
            updateActiveBlock(state);
            updateNames(state.players);
        }
    });
    // Начало

    // Конец
};

module.exports = setCitiesGame;