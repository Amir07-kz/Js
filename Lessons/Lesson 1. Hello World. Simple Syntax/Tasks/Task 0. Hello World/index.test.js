const sinon = require('sinon');
const helloWorld = require('./index');

describe('c.1.0 hello world!', () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        spy.restore();
    });

    it('c.1.0.1 hello', () => {
        helloWorld();
        const expected = 'Hello World!';
        const actual = spy.args.join('\n');
        expect(actual).toBe(expected);
    });

});