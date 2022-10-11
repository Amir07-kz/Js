/**
 * @jest-environment jsdom
 */
const setCounter = require('./index');

describe('c.5.1 counter', () => {
    document.body.innerHTML = '<div class="main"></div>';
    setCounter();

    const counter = document.querySelector('.main');

    it('c.5.1.1 button has been added', () => {
        const button = counter.querySelector('button');
        expect(button).not.toBeNull();

        const text = button.textContent;
        expect(text).toBe('Количество нажатий: 0');
    });

    it('c.5.1.2 click seven times', () => {
        const button = counter.querySelector('button');
        for (let i = 0; i < 7; i += 1) {
            button.click();
        }
        const text = button.textContent;
        expect(text).toEqual('Количество нажатий: 7');
    });

    it('c.5.1.2 click two more times', () => {
        const button = counter.querySelector('button');
        for (let i = 0; i < 2; i += 1) {
            button.click();
        }
        const text = button.textContent;
        expect(text).toEqual('Количество нажатий: 9');
    });
});
