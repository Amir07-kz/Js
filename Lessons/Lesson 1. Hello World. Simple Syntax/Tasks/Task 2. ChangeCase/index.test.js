const changeCase = require('./index');

describe('c.1.2 changeCase', () => {
    it('c.1.2.1 changeCase', () => {
        expect(changeCase('case')).toEqual('CASE');
        expect(changeCase('loveJS')).toEqual('LOVEjs');
        expect(changeCase('')).toEqual('');
        expect(changeCase('Hello World')).toEqual('hELLO wORLD');
    });
});