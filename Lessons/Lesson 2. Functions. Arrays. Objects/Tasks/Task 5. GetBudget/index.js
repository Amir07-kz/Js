const getBudget = (people) => {
    // Начало
    let sum = 0;

    for (let person of people)
    {
        sum += person.budget;
    }
    return sum;
    // Конец
};

module.exports = getBudget;