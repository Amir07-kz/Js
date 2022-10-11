const Console = require("console");
const itisCool = (begin, end) => {
    // Начало
    for (let i = begin; i <= end; i ++)
    {
        const itis = i % 3 === 0 ? 'Itis' : '';
        const Cool = i % 5 === 0 ? 'Cool' : '';
        const Itis_Cool = itis + Cool;
        console.log(Itis_Cool === '' ? i : Itis_Cool);
    }
    // Конец
};

module.exports = itisCool;