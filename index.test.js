const sum = require('./index');

test('one plus two equals three', () => {
  expect(sum(1, 2)).toBe(3);
});