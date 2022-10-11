/**
 * @jest-environment jsdom
 */
const setCalculator = require('./index');

describe('h.5.2 setCalculator', () => {
    document.body.innerHTML = '<div class="calc">' +
        '<div class="calc__header">' +
        '   <h2>Мой первый калькулятор на js</h2>' +
        '</div>' +
        '<div class="calc__main"></div>' +
        '<div class="calc__buttons"></div>' +
        '<div class="calc__result"></div>' +
        '</div>';

    setCalculator();

    it('h.5.2.1 buttons have been added', () => {
        const buttonsContainer = document.querySelector('.calc__buttons');
        const buttons = buttonsContainer.childNodes;
        const buttonsCount = [ ...buttons ].length;
        expect(buttonsCount).toBe(13);

        const plusButton = buttons[10];
        const plusButtonText = plusButton.textContent;
        expect(plusButtonText).toBe('+');

        const resetButton = buttons[12];
        const resetButtonText = resetButton.textContent;
        expect(resetButtonText).toBe('Сбросить');
    });

    it('h.5.2.2 result has default value "0"', () => {
        const resultNumber = document.querySelector('.calc__result-number');
        const resultNumberText = resultNumber.textContent;
        expect(resultNumberText).toBe('0');
    });

    const buttonsContainer = document.querySelector('.calc__buttons');
    const buttons = buttonsContainer.childNodes;
    const resultNumber = document.querySelector('.calc__result-number');
    const zeroButton = buttons[0];
    const oneButton = buttons[1];
    const twoButton = buttons[2];
    const fourButton = buttons[4];
    const fiveButton = buttons[5];
    const eightButton = buttons[8];
    const nineButton = buttons[9];
    const plusButton = buttons[10];
    const resultButton = buttons[11];
    const resetButton = buttons[12];

    const textDiv = document.querySelector('.calc__main');

    it('h.5.2.3 sum 1 + 10 + 100', () => {
        oneButton.click();
        plusButton.click();
        oneButton.click();
        zeroButton.click();
        plusButton.click();
        oneButton.click();
        zeroButton.click();
        zeroButton.click();
        resultButton.click();

        const resultNumberText = resultNumber.textContent;
        expect(resultNumberText).toBe('111');

        textDivContent = textDiv.textContent;
        expect(textDivContent).toBe('1+10+100');
    });

    it('h.5.2.4 reset count', () => {
        resetButton.click();
        const resultNumberText = resultNumber.textContent;
        expect(resultNumberText).toBe('0');

        textDivContent = textDiv.textContent;
        expect(textDivContent).toBe('');
    });


    it('h.5.2.5 sum 21 + 185 + 42 + 199', () => {
        twoButton.click();
        oneButton.click();
        plusButton.click();
        oneButton.click();
        eightButton.click();
        fiveButton.click();
        plusButton.click();
        fourButton.click();
        twoButton.click();
        plusButton.click();
        oneButton.click();
        nineButton.click();
        nineButton.click();
        resultButton.click();

        const resultNumberText = resultNumber.textContent;
        expect(resultNumberText).toBe('447');

        textDivContent = textDiv.textContent;
        expect(textDivContent).toBe('21+185+42+199');
    });
});
