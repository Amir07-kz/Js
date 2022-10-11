    const getRating = (object) => {
    // Начало
        const {dislikes, likes} = object;
        return likes - dislikes;
    // Конец
};

module.exports = getRating;