const getDaysAmount = (month, year) => {
    // Начало
    switch (month)
    {
        case 'January ':return new Date(year, 1, 0).getDate();

        case 'February ':return new Date(year, 2, 0).getDate();

        case 'March':return new Date(year, 3, 0).getDate();

        case 'April':return new Date(year, 4, 0).getDate();

        case 'May':return new Date(year, 5, 0).getDate();

        case 'June':return new Date(year, 6, 0).getDate();

        case 'July':return new Date(year, 7, 0).getDate();

        case 'August':return new Date(year, 8, 0).getDate();

        case 'September':return new Date(year, 9, 0).getDate();

        case 'October':return new Date(year, 10, 0).getDate();

        case 'November':
            return new Date(year, 11, 0).getDate();

        case 'December':
            return new Date(year, 12, 0).getDate();

        default: return 'error';
    }
    // Конец
};

module.exports = getDaysAmount;