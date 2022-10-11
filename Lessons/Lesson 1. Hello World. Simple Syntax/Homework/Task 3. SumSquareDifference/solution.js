const sumOfSquares = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i += 1) {
        sum += i * i;
    }

    return sum;
};

const squareOfSum = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i += 1) {
        sum += i;
    }

    return sum * sum;
};

const sumSquareDifference = (num) => {
    // Начало
    return squareOfSum(num) - sumOfSquares(num);
    // Конец
};

module.exports = sumSquareDifference;