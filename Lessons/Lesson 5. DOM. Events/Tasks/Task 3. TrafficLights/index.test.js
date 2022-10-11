/**
 * @jest-environment jsdom
 */
const setTrafficLight = require('./index');

const simulateSelectValueChange = (selector, value) => {
    const select = selector.querySelector('select');
    select.value = value;

    const event = new Event('change', {
        bubbles: true,
        cancelable: true,
    });

    select.dispatchEvent(event);
};

describe('c.5.3 trafficLights', () => {
    document.body.innerHTML = '<div class="traffic">' +
        '<div class="traffic__lights"></div>' +
        '<div class="traffic__lights-select"></div>' +
        '</div>';
    setTrafficLight();

    const trafficLights = document.querySelector('.traffic__lights');
    const trafficLightsSelect = document.querySelector('.traffic__lights-select');
    const container = trafficLights.querySelector('.traffic__lights-container');

    it('c.5.3.1 lights have been added', () => {
        expect(container).not.toBeNull();

        const spans = container.querySelectorAll('span');
        expect([ ...spans ].length).toBe(3);
    });

    it('c.5.3.2 select and options have been added', () => {
        const select = trafficLightsSelect.querySelector('select');
        expect(select).not.toBeNull();

        const options = select.querySelectorAll('option');
        const textes = [ ...options ].map((el) => el.textContent);
        const correctTextes = [ 'Красный', 'Желтый', 'Зеленый' ];
        expect(textes).toEqual(correctTextes);
    });

    it('c.5.3.3 red is default trafficLight color', () => {
        const lights = container.querySelectorAll('span');
        const [ redLight, yellowLight, greenLight ] = [ ...lights ];

        expect(redLight.className).toBe('red-light');
        expect(yellowLight.className).toBe('');
        expect(greenLight.className).toBe('');
    });

    it('c.5.3.4 click on yellow option', () => {
        simulateSelectValueChange(trafficLightsSelect, 'yellow');

        const lights = container.querySelectorAll('span');
        const [ redLight, yellowLight, greenLight ] = [ ...lights ];

        expect(redLight.className).toBe('');
        expect(yellowLight.className).toBe('yellow-light');
        expect(greenLight.className).toBe('');
    });

    it('c.5.3.5 click on green option', () => {
        simulateSelectValueChange(trafficLightsSelect, 'green');

        const lights = container.querySelectorAll('span');
        const [ redLight, yellowLight, greenLight ] = [ ...lights ];

        expect(redLight.className).toBe('');
        expect(yellowLight.className).toBe('');
        expect(greenLight.className).toBe('green-light');
    });
});