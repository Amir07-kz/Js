const getLastWordLength = (str) => {
    // Начало
    const words = str.trim().split(' ');
    const lastWord = words[words.length - 1];
    return lastWord.length;
    // Конец
};

module.exports = getLastWordLength;