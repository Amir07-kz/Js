const getBudget = require('./index');

describe('c.2.5 getBudget', () => {
    const arrayOne = [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
    ];
    const arrayTwo = [
        { name: "Elena", age: 5, budget: 223300 },
        { name: "Alexey",  age: 85, budget: 23000 },
        { name: "Alina",  age: 23, budget: 100000 }
    ];

    it('c.2.5.1', () => {
        expect(getBudget(arrayOne)).toBe(65700);
    })

    it('c.2.5.2', () => {
        expect(getBudget(arrayTwo)).toEqual(346300);
    })
});
