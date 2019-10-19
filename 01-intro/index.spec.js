// eslint-disable-next-line no-var
import helloWorld from '.';

describe('intro tests', () => {
  it('returns hello world!', () => {
    expect(helloWorld).toBe('Hello World!');
  });
});
