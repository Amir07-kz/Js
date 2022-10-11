const ASC = 'asc';

const getSortFunc = (type) => {
    return (a, b) => {
        return type === ASC ? a - b : b - a;
    };
};

const reorderDigits = (type, ...numbers) => {
    // Начало
    return numbers.sort(getSortFunc(type));
    // Конец
};

module.exports = reorderDigits;