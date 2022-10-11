const isSequenceContinuous = (numbers) => {
    // Начало
    if (numbers.length === 0 || numbers.length === 1){
        return false;
    }
    for (let i = 0; i < numbers-1; i++){
        if (parseInt(numbers[i]) !== parseInt(numbers[i+1] - 1)){
            return false;
        }
    }
    return true;
    // Конец
};

module.exports = isSequenceContinuous;