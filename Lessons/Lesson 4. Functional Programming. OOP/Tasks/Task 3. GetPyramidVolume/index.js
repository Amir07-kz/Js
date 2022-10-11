const {match} = require("sinon");

class Pyramid {
    // Начало
    constructor(p_height, s1, s2)
    {
        this.p_height = p_height;
        this.s1 = s1;
        this.s2 = s2;
    }
    getVolume()
    {
        return 1/3 * this.p_height * (this.s1 + this.s2 + Math.sqrt(this.s1 * this.s2));
    }
    // Конец
}

module.exports = Pyramid;