/**
 * @jest-environment jsdom
 */
const runClocks = require('./index');

const getRotationStyle = (angle) => `rotate(${angle}deg)`;

describe('c.8.1 runClocks', () => {
    document.body.innerHTML = '<div class="clocks">\n' +
        '    <div class="clocks__container">\n' +
        '        <span class="clocks__hour"></span>\n' +
        '        <span class="clocks__minute"></span>\n' +
        '        <span class="clocks__second"></span>\n' +
        '        <span class="clocks__dot"></span>\n' +
        '    </div>\n' +
        '</div>';

    runClocks();

    const hoursArrow = document.querySelector('.clocks__hour');
    const minutesArrow = document.querySelector('.clocks__minute');
    const secondsArrow = document.querySelector('.clocks__second');

    it('c.8.1.1 time should update every second', () => {
        jest.useFakeTimers();
        runClocks();
        jest.advanceTimersByTime(2000);

        const currentDate = new Date();
        const secondsAngle = 6 * currentDate.getSeconds();
        const minutesAngle = 6 * currentDate.getMinutes();
        const hoursAngle = 30 * currentDate.getHours();
        const currentSecondsAngle = secondsArrow.style.transform;
        const currentMinutesAngle = minutesArrow.style.transform;
        const currentHoursAngle = hoursArrow.style.transform;
        expect(currentSecondsAngle).toBe(getRotationStyle(secondsAngle));
        expect(currentMinutesAngle).toBe(getRotationStyle(minutesAngle));
        expect(currentHoursAngle).toBe(getRotationStyle(hoursAngle));
    });
});
