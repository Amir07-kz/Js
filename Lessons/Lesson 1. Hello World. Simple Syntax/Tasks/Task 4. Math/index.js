const roundAndRootNumber = (num) => {
    // Начало
    if(num < 0)
    {
        return ('error');
    }
    else
    {
        return String(Math.floor(Math.sqrt(num) * 100) / 100);
    }
    // Конец
};

module.exports = roundAndRootNumber;