import functions from './functions';

test('should add two plus two equal four', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('should subtract six by two equal three', () => {
  expect(functions.sub(6, 2)).toBe(4);
});

test('should divide six by two equal three', () => {
  expect(functions.div(6, 2)).toBe(3);
});

test('should multiple three by two equal six', () => {
  expect(functions.mul(3, 2)).toBe(6);
});

test('should add two plus three are less than seven', () => {
  expect(functions.add(2, 3)).toBeLessThan(7);
});

test('should add two plus three are greater than three', () => {
  expect(functions.add(2, 3)).toBeGreaterThan(3);
});

test('should add two plus three are greater than or equal five', () => {
  expect(functions.add(2, 3)).toBeGreaterThanOrEqual(5);
});

test('should check function exists', () => {
  expect(functions.reverseString).toBeDefined();
});

test('should reverse "hi4am" to "ma4ih"', () => {
  expect(functions.reverseString('hi4am')).toEqual('ma4ih');
});
