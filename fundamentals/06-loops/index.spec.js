import {
  highestMultipleOf5Before, angelicaWantsDoubleChocolateDrops, howMuchBamboo, factorial, fibonacci,
} from '.';

describe.skip('iteration', () => {
  it('howMuchBamboo returns correctly', () => {
    expect(howMuchBamboo(1)).toBe('bamboo ');
    expect(howMuchBamboo(2)).toBe('bamboo bamboo ');
    expect(howMuchBamboo(3)).toBe('bamboo bamboo bamboo ');
  });

  it.skip('angelicaWantsDoubleChocolateDrops keeps doubling angelicas chocolate', () => {
    expect(angelicaWantsDoubleChocolateDrops(1)).toBe(1);
    expect(angelicaWantsDoubleChocolateDrops(2)).toBe(2);
    expect(angelicaWantsDoubleChocolateDrops(3)).toBe(4);
    expect(angelicaWantsDoubleChocolateDrops(4)).toBe(8);
  });

  it.skip('highestMultipleOf5Before keeps doubling angelicas chocolate', () => {
    expect(highestMultipleOf5Before(3)).toBe(0);
    expect(highestMultipleOf5Before(8)).toBe(5);
    expect(highestMultipleOf5Before(24)).toBe(20);
    expect(highestMultipleOf5Before(25)).toBe(20);
  });

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
