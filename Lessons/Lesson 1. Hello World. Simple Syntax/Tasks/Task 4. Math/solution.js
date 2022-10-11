const roundAndRootNumber = (num) => {
    // Начало
    return num < 0
        ? 'error'
        : String(Math.floor(Math.sqrt(num) * 100) / 100);
    // Конец
};

module.exports = roundAndRootNumber;