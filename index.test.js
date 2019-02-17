const sum = require('./index');

test('one plus two equals three', () => {
  expect(sum(1, 2)).toBe(3);
});

test('five plus two equals seven', () => {
  expect(sum(5, 2)).toBe(7);
});