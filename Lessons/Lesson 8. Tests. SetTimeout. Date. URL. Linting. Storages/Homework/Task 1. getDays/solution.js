const MONTHS = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
};

const TRANSFORM_COEFFICIENT = 24 * 60 * 60 * 1000;

const getDaysAmount = (month, year) => {
    // Начало
    const monthIndex = MONTHS[month];
    if (!monthIndex && monthIndex !== 0) {
        return 'error';
    }
    const firstDayOfTheMonth = new Date(year, monthIndex);

    const isLastMonth = monthIndex === MONTHS.December;
    const nextMonthYear = isLastMonth ? year + 1 : year;
    const nextMonth = isLastMonth ? MONTHS.January : monthIndex + 1;
    const firstDayOfTheNextMonth = new Date(nextMonthYear, nextMonth);

    return Math.round((firstDayOfTheNextMonth - firstDayOfTheMonth) / TRANSFORM_COEFFICIENT);
    // Конец
};

module.exports = getDaysAmount;