const sum = require('./index');
const { myShoppingList } = require('./describe');

/* 
  describe(name, fn)
  creates a block that groups together several related tests.
 */

describe('my shopping list', () => {
  test('Have 4 items on my list', () => {
    const totalItems = Object.keys(myShoppingList).length;
    expect(totalItems).toBe(4);
  });
  test('add one item to the list', () => {
    myShoppingList['banana'] = 8;
    expect(myShoppingList).toEqual({
      apple: 5,
      orange: 8,
      cabbage: 1,
      milk: 1,
      banana: 8,
    })
  });
  test('Have 5 apples', () => {
    expect(myShoppingList.apple).toBe(5);
  });
});

describe('basic math operations', () => {
  test('one plus two equals three', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('five plus two equals seven', () => {
    expect(sum(5, 2)).toBe(7);
  });
});
