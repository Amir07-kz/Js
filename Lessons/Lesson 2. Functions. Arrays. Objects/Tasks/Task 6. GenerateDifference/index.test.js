const generateDifference = require('./index');

describe('c.2.6 generateDifference', () => {
    const objectOne1 = { name: 'Ilon', surname: 'Mask', age: 50 };
    const objectTwo1 = { name: 'Ilon-genius', surname: 'Mask', children: [ 'someInfo' ] };
    const result1 = {
        name: 'changed',
        surname: 'unchanged',
        age: 'deleted',
        children: 'added',
    };

    const objectOne2 = { one: 'one', two: 'two', three: 'three', four: 'four' };
    const objectTwo2 = { three: 'new three', four: 'four', five: 'five' };
    const result2 = {
        one: 'deleted',
        two: 'deleted',
        three: 'changed',
        four: 'unchanged',
        five: 'added',
    };

    it('c.2.6.1', () => {
        expect(generateDifference(objectOne1, objectTwo1)).toEqual(result1);
    })

    it('c.2.6.2', () => {
        expect(generateDifference(objectOne2, objectTwo2)).toEqual(result2);
    })
});
