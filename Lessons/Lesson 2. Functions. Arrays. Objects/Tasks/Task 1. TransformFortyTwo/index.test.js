const transformFortyTwo = require('./index');

describe('c.2.1 transformFortyTwo', () => {
    it ('c.2.1.1', () => {
        expect(transformFortyTwo([ 1, 2, 7 ])).toEqual([ 1, 2, 7 ]);
        expect(transformFortyTwo([ 12, 42, 25 ])).toEqual([ 12, 'forty two!', 25 ]);
        expect(transformFortyTwo([ 424, 4235, 882, 32 ])).toEqual([ 424, 4235, 'forty two!', 32 ]);
        expect(transformFortyTwo([ 54525, 1764, 4200, 43 ])).toEqual([ 54525, 'forty two!', 'forty two!', 43 ]);
        expect(transformFortyTwo([]).sort()).toEqual([].sort());
    })
});
