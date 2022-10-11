const CarBrand = require('./carBrand');

class BugattiBrand extends CarBrand {
    // Начало
    constructor(name, horsePowers, oneToHundred, price) {
        super(name, horsePowers, oneToHundred);
        this.name = `Bugatti ${name}`;
        this.price = price;
    }

    getIsExpensive() {
        return this.price > 1; // 1 million dollars
    }

    // Конец
}

module.exports = BugattiBrand;