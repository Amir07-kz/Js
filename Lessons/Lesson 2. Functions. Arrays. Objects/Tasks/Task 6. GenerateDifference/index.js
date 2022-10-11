// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
// Начало

    /* - added — ключ отсутствовал в первом объекте, но был добавлен во второй
    - deleted — ключ был в первом объекте, но отсутствует во втором
    - changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
    - unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями */

    let diff = {};

    for(let word in objTwo)
    {
        if (objOne.hasOwnProperty(word) === false && objTwo.hasOwnProperty(word))
        {
            diff[word] = 'added';
        }
    }

    for(let word in objOne)
    {
        if(objTwo.hasOwnProperty(word) === false)
        {
            diff[word] = 'deleted';
        }

        if(objTwo.hasOwnProperty(word) === true && objTwo[word] !== objOne[word])
        {
            diff[word] = 'changed';
        }

        if(objTwo[word] === objOne[word] && objTwo.hasOwnProperty(word))
        {
            diff[word] = 'unchanged';
        }
    }
    return diff;

// Конец
};

module.exports = generateDifference;