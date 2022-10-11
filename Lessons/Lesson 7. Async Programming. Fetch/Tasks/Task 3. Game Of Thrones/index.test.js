const getCharacterData = require('./index');

describe('c.7.3 getCharacterData', () => {
    it('c.7.3.1 get culture of character №121', () => {
        return getCharacterData(121, 'culture').then((info) => {
            const correctInfo = 'Androw Ashford, culture: Reach';
            expect(info).toBe(correctInfo);
        });
    });

    it('c.7.3.2 get actor of Jon Snow', () => {
        return getCharacterData(583, 'playedBy').then((info) => {
            const correctInfo = 'Jon Snow, playedBy: Kit Harington';
            expect(info).toBe(correctInfo);
        });
    });

    it('c.7.3.3 get Aegon Targaryen birth date', () => {
        return getCharacterData(42, 'born').then((info) => {
            const correctInfo = 'Aegon Targaryen, born: In 281 AC or 282 AC, at Dragonstone';
            expect(info).toBe(correctInfo);
        });
    });
});
