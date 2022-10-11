const isSequenceContinuous = require('./index');

describe('h.2.1 consistency is increasing', () => {
    it('h.2.1.1 should be false', () => {
        expect(isSequenceContinuous([])).toBeFalsy();
        expect(isSequenceContinuous([ 7 ])).toBeFalsy();
        expect(isSequenceContinuous([ 5, 3, 2, 8 ])).toBeFalsy();
        expect(isSequenceContinuous([ 10, 11, 12, 14, 15 ])).toBeFalsy();
        expect(isSequenceContinuous([ 10, 11, 11, 12 ])).toBeFalsy();
    });

    it('h.2.1.2 should be true', () => {
        expect(isSequenceContinuous([ 0, 1, 2, 3 ])).toBeTruthy();
        expect(isSequenceContinuous([ -5, -4, -3 ])).toBeTruthy();
        expect(isSequenceContinuous([ 10, 11, 12, 13 ])).toBeTruthy();
    });
});