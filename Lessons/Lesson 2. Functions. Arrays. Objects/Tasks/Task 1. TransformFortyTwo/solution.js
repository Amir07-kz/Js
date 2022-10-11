const isDividedToFortyTwo = (num) => num % 42 === 0;
const fortyTwoStr = 'forty two!';

const transformFortyTwo = (numbers) => {
    // Начало
    return result = numbers.map((num) => {
        return isDividedToFortyTwo(num) ? fortyTwoStr : num;
    });
    // Конец
};

module.exports = transformFortyTwo;