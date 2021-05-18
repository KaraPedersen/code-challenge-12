import { addValues } from './reduce.js';

test('given an array of numbers as input, uses reduce to add the values in the array', () => {
  const input = [1, 2, 3, 4, 5];
  const actual = addValues(input);
  expect(actual).toEqual(15);
});