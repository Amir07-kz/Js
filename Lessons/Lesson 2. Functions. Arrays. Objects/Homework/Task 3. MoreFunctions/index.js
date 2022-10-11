const moreFunction = (number) => {
    // Начало
    const newFunction = (arrayNums) =>
    {
        for (let i = 0; i < arrayNums.length; i++)
        {
            arrayNums[i] = arrayNums[i] / number;
        }
        return arrayNums;
    }
    return newFunction;
    // Конец
};

module.exports = moreFunction;