import {
  daysInWeek,
  daysInMonth,
  weekendDaysInYear,
} from '.';

describe('numbers and operations', () => {
  it('daysInWeek is 7', () => {
    expect(daysInWeek).toBe(7);
  });

  it.skip('daysInMonth is roughly 30', () => {
    expect(daysInMonth).toBeCloseTo(30.4, 1);
  });

  it.skip('weekendDaysInYear is roughly 104', () => {
    expect(weekendDaysInYear).toBeCloseTo(104.29, 2);
  });
});
