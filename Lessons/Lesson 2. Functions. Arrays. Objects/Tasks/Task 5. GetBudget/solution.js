const getBudget = (people) => {
    // Начало
    return people
        .map(({ budget }) => budget)
        .reduce((acc, budget) => acc + budget, 0);
    // Конец
};

module.exports = getBudget;