const isThreePower = require('./index');

describe('h.1.1 degree of three', () => {
    it('h.1.1.1 must be a power of three', () => {
        expect(isThreePower(1)).toBe(true);
        expect(isThreePower(3)).toBe(true);
        expect(isThreePower(9)).toBe(true);
        expect(isThreePower(27)).toBe(true);
        expect(isThreePower(81)).toBe(true);
        expect(isThreePower(243)).toBe(true);
    });

    it('h.1.1.2 should not be a power of three', () => {
        expect(isThreePower(0)).toBe(false);
        expect(isThreePower(2)).toBe(false);
        expect(isThreePower(12)).toBe(false);
        expect(isThreePower(16)).toBe(false);
        expect(isThreePower(28)).toBe(false);
        expect(isThreePower(90)).toBe(false);
    });
});
