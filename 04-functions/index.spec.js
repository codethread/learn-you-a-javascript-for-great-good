import { foo, bar, add } from '.';

describe.skip('basic functions', () => {
  it('foo when invoked, returns the value 3', () => {
    expect(foo()).toBe(3);
  });

  it.skip('bar when called with an argument, returns that argument', () => {
    expect(bar(3)).toBe(3);
    expect(bar(4)).toBe(4);
    expect(bar('cheese')).toBe('cheese');
  });

  it.skip('add, adds its two arguments together', () => {
    expect(add(1,2)).toBe(3);
    expect(add(3,4)).toBe(7);
    expect(add(7,18)).toBe(25);
  });
});
