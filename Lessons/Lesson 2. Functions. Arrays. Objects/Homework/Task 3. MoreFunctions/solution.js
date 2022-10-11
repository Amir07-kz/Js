const moreFunction = (number) => {
    // Начало
    return (numbers) => numbers.map((num) => num / number);
    // Конец
};

module.exports = moreFunction;