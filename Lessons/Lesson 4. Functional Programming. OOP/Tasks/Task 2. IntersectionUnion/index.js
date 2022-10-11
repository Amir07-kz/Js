const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    return {
        intersection : [...new Set([...arrOne].filter(x => arrTwo.includes(x)))],
        union : [...new Set([...arrOne, ...arrTwo])]
    };
    // Конец
};

module.exports = getIntersectionUnion;