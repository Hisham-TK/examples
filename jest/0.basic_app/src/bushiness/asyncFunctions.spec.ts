import asyncFunctions from './asyncFunctions';
import { createdUser, firstUser, users } from './asyncFunctions.longRes';

// Run this function on start on the execution
beforeAll(() => console.log('Database init'));
// Close this function on end on the execution
afterAll(() => console.log('Database close'));

// // Run this function on start of every test case
// beforeEach(() => console.log('Database init'));
// // Close this function on end of every test case
// afterEach(() => console.log('Database close'));

test('should first user should return as response', async () => {
  const data = await asyncFunctions.fetchFirstUser();
  expect(data).toEqual(firstUser);
});

test('should users', async () => {
  const data = await asyncFunctions.fetchAllUsers();
  expect(data).toEqual(users);
});

test('should be create user as response', async () => {
  const data = await asyncFunctions.insertUser(createdUser);
  expect(data).toEqual(createdUser);
});

describe('User describe to wrap multi test cases and can contains lifecycle methods like', () => {
  // Run this function on start on the execution
  // beforeAll(() => console.log('Database init'));
  // Close this function on end on the execution
  // afterAll(() => console.log('Database close'));

  // // Run this function on start of every test case
  // beforeEach(() => console.log('Database init'));
  // // Close this function on end of every test case
  // afterEach(() => console.log('Database close'));

  test('should first user should return as response', async () => {
    const data = await asyncFunctions.fetchFirstUser();
    expect(data).toEqual(firstUser);
  });

  test('should users', async () => {
    const data = await asyncFunctions.fetchAllUsers();
    expect(data).toEqual(users);
  });

  test('should be create user as response', async () => {
    const data = await asyncFunctions.insertUser(createdUser);
    expect(data).toEqual(createdUser);
  });
});
