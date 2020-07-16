import objectAssertion from './objectAssertion';

test('return created user', () => {
  expect(objectAssertion.createUser()).toStrictEqual({ name: { first: 'hisham', last: 'taha' } });
});

test('should has "Admin"', () => {
  expect(objectAssertion.userNames()).toContain('Admin');
});

test('Split array to chunks', () => {
  expect(objectAssertion.splitArr([1, 2, 3, 4, 5, 6, 7, 8], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);
});
