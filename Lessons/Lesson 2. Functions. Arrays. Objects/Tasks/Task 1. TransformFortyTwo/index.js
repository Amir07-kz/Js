const transformFortyTwo = (numbers) => {
    // Начало
    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] % 42 == 0)
        {
            numbers[i] = 'forty two!';
        }
    }
    return numbers;
    // Конец
};

module.exports = transformFortyTwo;