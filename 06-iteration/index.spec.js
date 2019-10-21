import { factorial, fibonacci } from '.';

describe('iteration', () => {
  it.skip('factorial function returns correctly', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(4);
    expect(factorial(4)).toBe(24);
    expect(factorial(8)).toBe(40320);
  });

  it.skip('fibonacci calculator returns nth fibonacci number', () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(7)).toBe(13);
  });
});
