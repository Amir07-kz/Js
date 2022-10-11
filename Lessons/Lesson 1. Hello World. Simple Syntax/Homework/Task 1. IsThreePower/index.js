const isThreePower = (num) => {
    // Начало
    if(num === 0)
    {
        return false;
    }
    while (num % 3 === 0)
    {
        num = num / 3;
    }
    return num === 1;
    // Конец
};

module.exports = isThreePower;