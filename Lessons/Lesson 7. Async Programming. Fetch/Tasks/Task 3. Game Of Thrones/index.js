const fetch = require('node-fetch');

const getCharacterData = (characterId, key) => {
    // Начало
    const url = "https://www.anapioficeandfire.com/api/characters/";
    return fetch(url + characterId)
        .then((response) => {
            return response.json();
        })
        .then((character) => {
            return `${character.name}, ${key}: ${character[key]}`;
        })
        .catch(() => {
            throw new Error('Такого персонажа нет');
        });
    // Конец
};

module.exports = getCharacterData;