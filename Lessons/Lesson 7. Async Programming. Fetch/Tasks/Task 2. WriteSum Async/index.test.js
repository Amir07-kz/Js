const fs = require('fs');
const path = require('path');
const writeSum = require('./index');

const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);

describe('c.7.2 writeSum', () => {
    it('c.7.2.1 function works with files "one.txt" and "two.txt"', () => {
        const contentFileOne = fs.readFileSync(getPath('/one.txt'), 'utf-8');
        expect(contentFileOne).toBe('1, 2, 3, 4, 5, 6');

        const contentFileTwo = fs.readFileSync(getPath('/two.txt'), 'utf-8');
        expect(contentFileTwo).toBe('31, 42, 22, 10, 5');

        return writeSum(getPath('/one.txt'), getPath('/two.txt')).then((number) => {
            expect(number).toBe(131);
        });
    });

    it('c.7.2.2 function works with files "two.txt" and "three.txt"', () => {
        const contentFileOne = fs.readFileSync(getPath('/one.txt'), 'utf-8');
        expect(contentFileOne).toBe('1, 2, 3, 4, 5, 6');

        const contentFileTwo = fs.readFileSync(getPath('/two.txt'), 'utf-8');
        expect(contentFileTwo).toBe('31, 42, 22, 10, 5');

        return writeSum(getPath('/two.txt'), getPath('/three.txt')).then((number) => {
            expect(number).toBe(183);
        });
    });

    it('c.7.2.3 function works with files "one.txt" and "three.txt"', () => {
        return writeSum(getPath('/one.txt'), getPath('/three.txt')).then((number) => {
            expect(number).toBe(94);
        });
    });

    it('c.7.2.4 function handles error', () => {
        return writeSum(getPath('/one.txt'), getPath('/four.txt')).catch((error) => {
            expect(error.message).toBe('Такого файла нет');
        });
    });
});
