import regex from './regex';
test('is my name is contains taha', () => {
  expect(regex.whatIsMeName()).toMatch(/taha/);
});
