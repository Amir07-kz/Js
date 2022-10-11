/**
 * @jest-environment jsdom
 */
const setCitiesGame = require('./index');

const checkAreElementsActive = (elements) => [ ...elements ].map((el) => el.classList.contains('active'));

describe('h.6.1 city game web', () => {
    document.body.innerHTML = '<div class="main cities">\n' +
        '    <h3>ГОРОДА</h3>\n' +
        '\n' +
        '    <div class="cities__main-block cities__start-block active">\n' +
        '        <div class="cities__names-container">\n' +
        '            <div class="cities__block">\n' +
        '                <label for="name-first" class="form-label">Имя первого игрока</label>\n' +
        '                <input type="email" class="form-control" id="name-first" placeholder="Илон">\n' +
        '            </div>\n' +
        '            <div class="cities__block cities__block--second">\n' +
        '                <label for="name-second" class="form-label">Имя второго игрока</label>\n' +
        '                <input type="email" class="form-control" id="name-second" placeholder="Маск">\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <button type="button" class="cities__button cities__button--start btn btn-success">\n' +
        '            Начать игру!\n' +
        '        </button>\n' +
        '    </div>\n' +
        '\n' +
        '    <div class="cities__main-block cities__game-block">\n' +
        '        <label for="new-city" class="form-label">Введите название города</label>\n' +
        '        <input type="email" class="form-control" id="new-city" placeholder="Казань">\n' +
        '        <button type="button" class="cities__button cities__button--add btn btn-primary">\n' +
        '            Добавить\n' +
        '        </button>\n' +
        '        <div class="cities__names-container">\n' +
        '            <div class="cities__user-name cities__user-name--first active"></div>\n' +
        '            <div class="cities__user-name cities__user-name--second"></div>\n' +
        '        </div>\n' +
        '        <div class="cities__cities-container ">\n' +
        '            <div class="cities__user-cities cities__user-cities--first"></div>\n' +
        '            <div class="cities__user-cities cities__user-cities--second"></div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '\n' +
        '    <div class="cities__main-block cities__finish-block">\n' +
        '        <div class="alert alert-success" role="alert">\n' +
        '        </div>\n' +
        '        <button type="button" class="cities__button cities__button--restart btn btn-warning">\n' +
        '            Начать сначала\n' +
        '        </button>\n' +
        '    </div>\n' +
        '</div>';

    setCitiesGame();

    const container = document.querySelector('.cities');
    const blocks = container.querySelectorAll('.cities__main-block');
    const firstPlayerInput = document.getElementById('name-first');
    const secondPlayerInput = document.getElementById('name-second');
    const startButton = document.querySelector('.cities__button--start');
    const addButton = document.querySelector('.cities__button--add');
    const restartButton = document.querySelector('.cities__button--restart');

    const nameFirstElement = document.querySelector('.cities__user-name--first');
    const nameSecondElement = document.querySelector('.cities__user-name--second');

    const firstPlayerCitiesBlock = document.querySelector('.cities__user-cities--first');
    const secondPlayerCitiesBlock = document.querySelector('.cities__user-cities--second');

    const alertElement = document.querySelector('.alert-success');

    const addInput = document.getElementById('new-city');

    it('h.6.1.1 game 1. default first block is active', () => {
        const activesArray = checkAreElementsActive(blocks);
        const hasFirstDivActiveClass = activesArray[0];
        expect(hasFirstDivActiveClass).toBeTruthy();

        const hasSecondDivActiveClass = activesArray[1];
        expect(hasSecondDivActiveClass).toBeFalsy();

        const hasThirdDivActiveClass = activesArray[2];
        expect(hasThirdDivActiveClass).toBeFalsy();
    });

    it('h.6.1.2 game 1. add palyers and press "start"', () => {
        firstPlayerInput.value = 'Илон';
        secondPlayerInput.value = 'Джеф';
        startButton.click();

        const activesArray = checkAreElementsActive(blocks);
        const hasFirstDivActiveClass = activesArray[0];
        expect(hasFirstDivActiveClass).toBeFalsy();

        const hasSecondDivActiveClass = activesArray[1];
        expect(hasSecondDivActiveClass).toBeTruthy();

        const hasThirdDivActiveClass = activesArray[2];
        expect(hasThirdDivActiveClass).toBeFalsy();

        const firstPlayerAddedName = nameFirstElement.textContent;
        expect(firstPlayerAddedName).toBe('Илон');

        const secondPlayerAddedName = nameSecondElement.textContent;
        expect(secondPlayerAddedName).toBe('Джеф');
    });

    it('h.6.1.3 game 1. add first correct city', () => {
        addInput.value = 'Новгород';
        addButton.click();

        const isInputValueWasReseted = addInput.value === '';
        expect(isInputValueWasReseted).toBeTruthy();

        const isFirstPlayerActive = nameFirstElement.classList.contains('active');
        expect(isFirstPlayerActive).toBeFalsy();

        const isSecondPlayerActive = nameSecondElement.classList.contains('active');
        expect(isSecondPlayerActive).toBeTruthy();

        const firstCityWasAdded = firstPlayerCitiesBlock.innerHTML === '<span>Новгород</span>';
        expect(firstCityWasAdded).toBeTruthy();

        const isSecondPlayerBlockEmpty = secondPlayerCitiesBlock.innerHTML === '';
        expect(firstCityWasAdded).toBeTruthy();
    });

    it('h.6.1.4 game 1. add second correct city', () => {
        addInput.value = 'Днепропетровск';
        addButton.click();

        const isFirstPlayerActive = nameFirstElement.classList.contains('active');
        expect(isFirstPlayerActive).toBeTruthy();

        const isSecondPlayerActive = nameSecondElement.classList.contains('active');
        expect(isSecondPlayerActive).toBeFalsy();

        const secondCityWasAdded = secondPlayerCitiesBlock.innerHTML === '<span>Днепропетровск</span>';
        expect(secondCityWasAdded).toBeTruthy();
    });

    it('h.6.1.5 game 1. add third correct city', () => {
        addInput.value = 'Казань';
        addButton.click();

        const isFirstPlayerActive = nameFirstElement.classList.contains('active');
        expect(isFirstPlayerActive).toBeFalsy();

        const isSecondPlayerActive = nameSecondElement.classList.contains('active');
        expect(isSecondPlayerActive).toBeTruthy();

        const thirdCityWasAdded = firstPlayerCitiesBlock.innerHTML === '<span>Новгород</span><span>Казань</span>';
        expect(thirdCityWasAdded).toBeTruthy();
    });


    it('h.6.1.6 game 1. add first incorrect city', () => {
        addInput.value = 'Астана';
        addButton.click();

        const activesArray = checkAreElementsActive(blocks);
        const hasFirstDivActiveClass = activesArray[0];
        expect(hasFirstDivActiveClass).toBeFalsy();

        const hasSecondDivActiveClass = activesArray[1];
        expect(hasSecondDivActiveClass).toBeFalsy();

        const hasThirdDivActiveClass = activesArray[2];
        expect(hasThirdDivActiveClass).toBeTruthy();

        const alertText = alertElement.textContent;
        expect(alertText).toBe('Ошибка! Игрок Илон одержал победу!');
    });

    it('h.6.1.7 game 1. restart game, start game 2', () => {
        restartButton.click();

        const activesArray = checkAreElementsActive(blocks);
        const hasFirstDivActiveClass = activesArray[0];
        expect(hasFirstDivActiveClass).toBeTruthy();

        const hasSecondDivActiveClass = activesArray[1];
        expect(hasSecondDivActiveClass).toBeFalsy();

        const hasThirdDivActiveClass = activesArray[2];
        expect(hasThirdDivActiveClass).toBeFalsy();

        const firstPlayerInputValue = firstPlayerInput.value;
        const secondPlayerInputValue = secondPlayerInput.value;

        expect(firstPlayerInputValue).toBe('');
        expect(secondPlayerInputValue).toBe('');
    });

    it('h.6.1.8 game 2. add players and start game 2', () => {
        firstPlayerInput.value = 'Михаэль';
        secondPlayerInput.value = 'Ральф';
        startButton.click();

        const activesArray = checkAreElementsActive(blocks);
        const hasFirstDivActiveClass = activesArray[0];
        expect(hasFirstDivActiveClass).toBeFalsy();

        const hasSecondDivActiveClass = activesArray[1];
        expect(hasSecondDivActiveClass).toBeTruthy();

        const hasThirdDivActiveClass = activesArray[2];
        expect(hasThirdDivActiveClass).toBeFalsy();

        const firstPlayerAddedName = nameFirstElement.textContent;
        expect(firstPlayerAddedName).toBe('Михаэль');

        const secondPlayerAddedName = nameSecondElement.textContent;
        expect(secondPlayerAddedName).toBe('Ральф');

        const isАFirstPlayerBlockEmpty = firstPlayerCitiesBlock.innerHTML === '';
        expect(isАFirstPlayerBlockEmpty).toBeTruthy();

        const isSecondPlayerBlockEmpty = secondPlayerCitiesBlock.innerHTML === '';
        expect(isSecondPlayerBlockEmpty).toBeTruthy();
    });
});
