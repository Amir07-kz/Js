const reverseString = require('./index');

describe('h.1.2 reverseString', () =>
{
    it('h.1.2.1', () =>
    {
        expect(reverseString('javascript')).toBe('tpircsavaj');
        expect(reverseString('console')).toBe('elosnoc');
        expect(reverseString('ab')).toBe('ba');
    });
    it('h.1.2.2', () =>
    {
        expect(reverseString('')).toBe('');
    });
});
