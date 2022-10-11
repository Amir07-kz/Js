const sumSquareDifference = (num) => {
    // Начало
    let sum1 = 0;
    for(let i = 1; i <= num; i++){
        sum1 += i ** 2;
    }
    let sum2 = 0;
    for( let i = 1; i <= num; i++){
        sum2 += i;
    }
    return sum2 ** 2 - sum1;
    // Конец
};

module.exports = sumSquareDifference;