import { foo, bar } from '.';

describe('basic functions', () => {
  it('foo when invoked, returns the value 3', () => {
    expect(foo()).toBe(3);
  });

  it.skip('bar when called with an argument, returns that argument', () => {
    expect(foo(3)).toBe(3);
    expect(foo(4)).toBe(4);
    expect(foo('cheese')).toBe('cheese');
  });
});
