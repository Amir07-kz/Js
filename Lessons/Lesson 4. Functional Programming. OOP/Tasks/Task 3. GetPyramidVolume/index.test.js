const Pyramid = require('./index');

const roundNumber = (num) =>  Math.round(num * 100) / 100;

describe('c.4.3 PyramidVolume', () => {
    it('c.4.3.1', () => {
        const pyramidOne = new Pyramid(10, 25, 15);
        expect(roundNumber(pyramidOne.getVolume())).toEqual(197.88);

        const pyramidTwo = new Pyramid(1, 1, 1);
        expect(roundNumber(pyramidTwo.getVolume())).toEqual(1);

        const pyramidThree = new Pyramid(100, 225, 184);
        expect(roundNumber(pyramidThree.getVolume())).toEqual(20415.66);
    });
});
