import { foo } from '.';

describe('title', () => {
  it('does something', () => {
    expect(foo).toBe('');
  });

  it.skip('does something else', () => {
    expect(foo).toBe('');
  });
});
