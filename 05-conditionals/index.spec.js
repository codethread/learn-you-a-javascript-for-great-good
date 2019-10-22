import {
  addOrSubtract, ifGivenTwoReturnsFive, addIfTrue, returnIfLessThan5,
} from '.';

describe('conditionals', () => {
  it('ifGivenTwoReturnsFive returns 5 when passed 2, in all other cases returns nothing', () => {
    expect(ifGivenTwoReturnsFive(2)).toBe(5);
    expect(ifGivenTwoReturnsFive(3)).toBeUndefined();
  });

  it.skip('returnIfLessThan5 when pass a number, returns it if it is less than 5, in all other cases returns nothing', () => {
    expect(returnIfLessThan5(-3)).toBe(-3);
    expect(returnIfLessThan5(4)).toBe(4);
    expect(returnIfLessThan5(5)).toBeUndefined();
  });

  it.skip('addIfTrue adds first two arguments if passed "true" as third arg in all other cases returns nothing', () => {
    expect(addIfTrue(1, 2, true)).toBe(3);
    expect(addIfTrue(8, 2, true)).toBe(10);
    expect(addIfTrue(8, 2, false)).toBeUndefined();
  });

  it.skip('addOrSubtract takes two numbers, if the FIRST number is bigger than the second number, add them, if the FIRST number is smaller than the second, subtract the bigger number from the smaller number', () => {
    expect(addOrSubtract(1, 2)).toBe(-1);
    expect(addOrSubtract(4, 2)).toBe(6);
    expect(addOrSubtract(8, 10)).toBe(-2);
  });
});
