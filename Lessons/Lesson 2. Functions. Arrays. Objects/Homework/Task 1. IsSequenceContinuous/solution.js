const isSequenceContinuous = (numbers) => {
    // Начало
    if (numbers.length < 2) {
        return false;
    }
    for (let i = 0; i < numbers.length - 1; i += 1) {
        if (numbers[i + 1] - numbers[i] !== 1) {
            return false;
        }
    }
    return true;
    // Конец
};

module.exports = isSequenceContinuous;