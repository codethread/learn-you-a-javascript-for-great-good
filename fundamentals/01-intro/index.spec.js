import { helloWorld, helloWorldWithNewLine } from '.';

describe('intro tests', () => {
  it('helloWorld has value Hello World!', () => {
    expect(helloWorld).toBe('Hello World!');
  });

  it.skip('helloWorldWithNewLine has value Hello\nWorld!', () => {
    expect(helloWorldWithNewLine).toBe('Hello\nWorld!');
  });
});
