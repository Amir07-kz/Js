const getBiggestSum = require('./index');

describe('h.4.1 getBiggestSum', () => {
    it('h.4.1.1 common', () => {
        expect(getBiggestSum([ [ 1 ], [ 7, 4 ], [ 2, 4, 6 ], [ 3, 1, 4, 1 ] ])).toBe(16);
        expect(getBiggestSum([ [ 1 ], [ 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9, 10 ] ])).toBe(20);
        expect(getBiggestSum([ [ 2 ], [ 9, 4 ], [ 1, 8, 7 ], [ 6, 4, 7, 2 ] ])).toBe(26);
    });
});