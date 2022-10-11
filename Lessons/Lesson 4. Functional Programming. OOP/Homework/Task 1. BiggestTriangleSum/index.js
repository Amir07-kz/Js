const getBiggestSum = (layers) => {
    // Начало
    let element = 0
    let sum = 0
    let line = 0

    function getBiggest(layer)
    {
        if (line === layers.length)
        {
            return 0
        }
        if (layer.length === 1)
        {
            line++
            ans = layer[0] + getBiggest(layers[line])
            return ans
        }
        if (layer[element] > layer[element + 1])
        {
            line++
            ans = layer[element] + getBiggest(layers[line])
            return ans
        }
        else
        {
            line++
            element++
            ans = layer[element] + getBiggest(layers[line])
            return ans
        }
    }
    sum += getBiggest(layers[line])
    return sum
    // Конец
};

module.exports = getBiggestSum;