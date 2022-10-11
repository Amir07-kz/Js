const isTicketHappy = (num) => {
    // Начало
    const nums = String(num);
    if (nums.length != 6)
        return false;

    const sum = (s) => {
        if (s.length === 1)
            return s;

        return Number(s.substr(0, 1)) + Number(sum(s.substr(1, s.length - 1)));
    };

    const left = nums.substr(0, 3);
    const right = nums.substr(3, 3);
    return sum(left) === sum(right) ? true : false;
    // Конец
};

module.exports = isTicketHappy;