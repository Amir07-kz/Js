const fs = require('fs');
const path = require('path');
const writeSumSync = require('./index');

const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);

describe('c.7.1 writeSum sync', () => {
    it('c.7.1.1 function works with files "one.txt" and "two.txt"', () => {
        writeSumSync(getPath('/one.txt'), getPath('/two.txt'), getPath('/result.txt'));

        const contentFileOne = fs.readFileSync(getPath('/one.txt'), 'utf-8');
        expect(contentFileOne).toBe('1, 2, 3, 4, 5, 6');

        const contentFileTwo = fs.readFileSync(getPath('/two.txt'), 'utf-8');
        expect(contentFileTwo).toBe('31, 42, 22, 10, 5');

        const contentFileThree = fs.readFileSync(getPath('/three.txt'), 'utf-8');
        expect(contentFileThree).toBe('18, 33, 21, 1');

        const resultContent = fs.readFileSync(getPath('/result.txt'), 'utf-8');
        expect(resultContent).toBe('131');
    });

    it('c.7.1.2 function works with files "two.txt" and "three.txt"', () => {
        writeSumSync(getPath('/two.txt'), getPath('/three.txt'), getPath('/result.txt'));
        const resultContent = fs.readFileSync(getPath('/result.txt'), 'utf-8');
        expect(resultContent).toBe('183');
    });

    it('c.7.1.3 function works with files "one.txt" and "three.txt"', () => {
        writeSumSync(getPath('/one.txt'), getPath('/three.txt'), getPath('/result.txt'));
        const resultContent = fs.readFileSync(getPath('/result.txt'), 'utf-8');
        expect(resultContent).toBe('94');
    });
});
