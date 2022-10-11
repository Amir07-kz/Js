const fs = require('fs');
const path = require('path');

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');
// wy y talking about three files in readme.md, but using only two?
const writeSum = async (pathToFileOne, pathToFileTwo) => {
    try {
        return await new Promise((resolve, reject) =>
                fs.readFile(pathToFileOne, "utf8", (e, data) => e ? reject(e) : resolve(data.split(", ").reduce((p, c) => p + +c, 0)))
            )
            + await new Promise((resolve, reject) =>
                fs.readFile(pathToFileTwo, "utf8", (e, data) => e ? reject(e) : resolve(data.split(", ").reduce((p, c) => p + +c, 0)))
            );
    } catch (e) {
        e.message = "Такого файла нет"
        throw e;
    }
};

module.exports = writeSum;