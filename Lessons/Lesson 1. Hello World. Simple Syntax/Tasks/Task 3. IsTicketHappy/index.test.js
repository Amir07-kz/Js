const isTicketHappy = require('./index');

describe('c.1.3 is ticket happy', () => {
    it('c.1.3.1 happy ticket', () => {
        expect(isTicketHappy('060006')).toBe(true);
        expect(isTicketHappy('123321')).toBe(true);
        expect(isTicketHappy('341800')).toBe(true);
        expect(isTicketHappy('812146')).toBe(true);
    });

    it('c.1.3.2 unhappy ticket', () => {
        expect(isTicketHappy('000001')).toBe(false);
        expect(isTicketHappy('123567')).toBe(false);
        expect(isTicketHappy('213612')).toBe(false);
    });
});
