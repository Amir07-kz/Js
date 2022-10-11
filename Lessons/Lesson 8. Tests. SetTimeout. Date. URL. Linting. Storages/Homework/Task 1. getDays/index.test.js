const getDaysAmount = require('./index');

describe('h.8.1 getDaysAmount', () => {
    it('h.8.1.1 get days of may in 1918', () => {
        const february2000Days = getDaysAmount('May', 1918);
        expect(february2000Days).toBe(31);
    });

    it('h.8.1.2 get days of february in 1564', () => {
        const february2000Days = getDaysAmount('February', 1564);
        expect(february2000Days).toBe(29);
    });

    it('h.8.1.3 get days of february in 1755', () => {
        const february2000Days = getDaysAmount('February', 1755);
        expect(february2000Days).toBe(28);
    });

    it('h.8.1.4 get days of december in 1997', () => {
        const october2021Days = getDaysAmount('December', 1997);
        expect(october2021Days).toBe(31);
    });

    it('h.8.1.5 get days of january in 2021', () => {
        const october2021Days = getDaysAmount('January', 2021);
        expect(october2021Days).toBe(31);
    });

    it('h.8.1.6 get days of september in 1984', () => {
        const october2021Days = getDaysAmount('September', 1984);
        expect(october2021Days).toBe(30);
    });

    it('h.8.1.7 get days of undefind month', () => {
        const undefindMonthDays = getDaysAmount('Catober', 2021);
        expect(undefindMonthDays).toBe('error');
    });
});