const fs = require('fs');
const path = require('path');

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    const firstFileSum = fs.readFileSync(pathToFileOne).toString().split(",").map((x) =>
    {
        return parseInt(x,10);
    }).map(i=>x+=i, x=0).reverse()[0];

    const secondFileSum = fs.readFileSync(pathToFileTwo).toString().split(",").map((x) =>
    {
        return parseInt(x,10);
    }).map(i=>x+=i, x=0).reverse()[0];

    const result = firstFileSum + secondFileSum;
    fs.writeFileSync(pathToResultFile, result.toString());
};


module.exports = writeSumSync;