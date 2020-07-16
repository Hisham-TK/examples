import valuesAssertion from './valuesAssertion';

test('should be null', () => {
  expect(valuesAssertion.isNull()).toBeNull();
});

test('check value to be truthy', () => {
  expect(valuesAssertion.checkValue('name')).toBeTruthy();
});

test('check value to be truthy', () => {
  expect(valuesAssertion.checkValue('2')).toBeTruthy();
});

test('check value to be truthy', () => {
  expect(valuesAssertion.checkValue(true)).toBeTruthy();
});

test('check value to be false', () => {
  expect(valuesAssertion.checkValue(null)).toBeFalsy();
});
