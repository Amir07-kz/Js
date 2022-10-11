const sumSquareDifference = require('./index');

describe('h.1.3 sumSquareDifference', () => {
    it('h.1.3', () => {
        expect(sumSquareDifference(1)).toEqual(0);
        expect(sumSquareDifference(5)).toEqual(170);
        expect(sumSquareDifference(10)).toEqual(2640);
        expect(sumSquareDifference(42)).toEqual(789824);
    });
});
