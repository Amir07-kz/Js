/**
 * @jest-environment jsdom
 */
const createButton = require('./index');

describe('c.5.2 createButton', () => {
    document.body.innerHTML = '<div class="main"><div class="container"></div><div class="description"></div></div>';
    createButton();

    const main = document.querySelector('.main');
    const container = document.querySelector('.container');
    const description = main.querySelector('.description');

    it('c.5.2.1 button has been added', () => {
        const button = container.querySelector('button');
        expect(button).not.toBeNull();
    });

    it('c.5.2.2 button has correct text', () => {
        const button = container.querySelector('button');
        expect(button.textContent).toBe('Кнопка');
    });

    it('c.5.2.3 click has correct handler', () => {
        const button = main.querySelector('button');
        button.click();
        const textSpan = description.querySelector('span');
        expect(textSpan).not.toBeNull();
        expect(textSpan.textContent).toBe('Текст вставлен!');
    });
});
