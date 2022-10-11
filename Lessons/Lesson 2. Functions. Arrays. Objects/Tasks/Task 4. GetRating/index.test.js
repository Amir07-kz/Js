const getRating = require('./index');

describe('c.2.4 getRating', () => {
    it('c.2.4.1', () => {
        expect(getRating({ likes: 1, dislikes: 43 })).toBe(-42);
        expect(getRating({ likes: 15, dislikes: 5 })).toEqual(10);
        expect(getRating({ likes: 122, dislikes: 122 })).toEqual(0);
    })
});
