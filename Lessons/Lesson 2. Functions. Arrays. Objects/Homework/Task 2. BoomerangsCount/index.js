const getBoomerangsCount = (numbers) => {
    // Начало
    let count = 0;
    for (let i = 1; i < numbers.length; i++)
    {
        if(numbers[i-1] === numbers[i+1] && numbers[i] !== numbers[i-1])
        {
            count++;
        }
    }
    return count;
    // Конец
};

module.exports = getBoomerangsCount;