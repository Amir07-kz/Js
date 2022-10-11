const reverseString = (str) => {
    // Начало
    if (str.length === 0) {
        return str;
    }
    return `${str.slice(-1)}${reverseString(str.slice(0, -1))}`;
    // Конец
};

// Высокоуровневое решение
// const reverseString = (str) => str.split('').reverse().join('');

module.exports = reverseString;