const sub = require('./sub');

test('subtracts 2 from 3 to equal 1', () => {
    expect(sub(3, 2)).toBe(1);
});