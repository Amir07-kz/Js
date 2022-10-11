const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    const numbers = [ ...arrOne, ...arrTwo ];
    const unionNumbers = numbers
        .filter((num) => arrOne.includes(num) || arrTwo.includes(num))
        .reduce((acc, num) => acc.includes(num) ? acc : [ ...acc, num ], []);

    const interSectionNumbers = arrOne.filter((num) => arrTwo.includes(num));

    return {
        intersection: interSectionNumbers,
        union: unionNumbers,
    };
    // Конец
};

module.exports = getIntersectionUnion;