const getBiggestSum = (layers) => {
    // Начало
    return layers.reduceRight((acc, layer) => {
        return layer.map((num, index) => {
            return num + Math.max(acc[index], acc[index + 1]);
        });
    })[0];
    // Конец
};

module.exports = getBiggestSum;