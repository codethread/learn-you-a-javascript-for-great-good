import {
  sarahInfo,
  sarahInfoAsString,
  sarahsAgeNextYear,
  sarahsAgeNextYearAsString,
} from '.';

describe.skip('Casting Types', () => {
  it('sarahInfo prints Sarah\'s age', () => {
    expect(sarahInfo).toBe('Sarah is 4 years old');
  });

  it.skip('sarahInfoAsString also prints Sarah\'s age', () => {
    expect(sarahInfoAsString).toBe('Sarah is 4 years old');
  });

  it.skip('sarahsAgeNextYear is 5', () => {
    expect(sarahsAgeNextYear).toBe(5);
  });

  it.skip('sarahsAgeNextYearAsString is 41', () => {
    expect(sarahsAgeNextYearAsString).toBe('41');
  });
});
