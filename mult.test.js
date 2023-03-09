const mult = require('./mult');

test('multiplies 2 and 3 to equal 6', () => {
    expect(mult(2, 3)).toBe(6);
});