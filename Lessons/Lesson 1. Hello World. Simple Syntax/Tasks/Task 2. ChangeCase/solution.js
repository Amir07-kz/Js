const changeCase = (str) => {
    // Начало
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
        const upper = str[i] === str[i].toUpperCase();
        result += upper ? str[i].toLowerCase() : str[i].toUpperCase();
    }

    return result;
    // Конец
};

module.exports = changeCase;