const reorderDigits = (str, ints) => {
    // Начало
    if(str === 'asc')
    {
        return ints.sort((o1, o2) =>
            o1 - o2
        )
    }
    else if(str === 'desc')
    {
        return ints.sort((o1, o2) =>
            o2 - o1
        )
    }
    else
    {
        return ints
    }
    // Конец
};

module.exports = reorderDigits;