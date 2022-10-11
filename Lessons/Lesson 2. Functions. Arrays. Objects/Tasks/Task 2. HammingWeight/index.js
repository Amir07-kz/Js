const hammingWeight = (num) => {
    // Начало
    const dnum = num.toString(2);
    let count = 0;
    for (let i = 0; i < dnum.length; i++)
    {
        if(dnum[i] === '1')
        {
            count++;
        }
    }
    return count;
    // Конец
};

module.exports = hammingWeight;