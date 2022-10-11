const getLastWordLength = (str) => {
    // Начало
    const array = str.trim().split(' ');
    return array[array.length-1].length;
    // Конец
};

module.exports = getLastWordLength;