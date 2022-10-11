const hammingWeight = require('./index');

describe('c.2.2 Hamming weight', () => {
    it('c.2.2.1', () => {
        expect(hammingWeight(0)).toBe(0);
        expect(hammingWeight(1)).toBe(1);
        expect(hammingWeight(5)).toBe(2);
        expect(hammingWeight(10)).toBe(2);
        expect(hammingWeight(101)).toBe(4);
        expect(hammingWeight(12345)).toBe(6);
    })
});
