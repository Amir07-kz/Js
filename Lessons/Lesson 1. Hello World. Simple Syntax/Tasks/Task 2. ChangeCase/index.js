const changeCase = (str) => {
    // Начало
    var new_str = "";
    for (var i = 0; i < str.length; i++)
    {
        if (str[i] === str[i].toLowerCase())
        {
            new_str += str[i].toUpperCase();
        } else {
            new_str += str[i].toLowerCase();
        }
    }
    return new_str;
    // Конец
};

module.exports = changeCase;