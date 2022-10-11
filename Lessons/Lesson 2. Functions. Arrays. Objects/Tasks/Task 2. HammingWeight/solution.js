const hammingWeight = (num) => {
    // Начало
    let weight = 0;
    const digits = num.toString(2).split('');

    for (let i = 0; i < digits.length; i += 1) {
        weight += Number(digits[i]);
    }

    return weight;
    // Конец
};

module.exports = hammingWeight;