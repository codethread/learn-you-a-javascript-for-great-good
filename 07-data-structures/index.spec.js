import { foo } from '.';

describe.skip('title', () => {
  it('does something', () => {
    expect(foo).toBe('');
  });

  it.skip('does something else', () => {
    expect(foo).toBe('');
  });
});
