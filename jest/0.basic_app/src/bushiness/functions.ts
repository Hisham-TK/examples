const functions = {
  add: (num1: number, num2: number): number => num1 + num2,
  sub: (num1: number, num2: number): number => num1 - num2,
  mul: (num1: number, num2: number): number => num1 * num2,
  div: (num1: number, num2: number): number => num1 / num2,

  reverseString: (str: string): string => str.split('').reverse().join(''),
};

export default functions;
