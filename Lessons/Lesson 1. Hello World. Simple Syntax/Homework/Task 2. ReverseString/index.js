const reverseString = (str) => {
    // Начало
    return str.split('').reverse().join('');
    reverseString(str);
    // Конец
};

module.exports = reverseString;