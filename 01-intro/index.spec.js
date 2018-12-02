// eslint-disable-next-line no-var
var helloWorld = require('./index.js');

describe('intro tests', () => {
  context('when fetch succeeds', () => {
    it('returns hello world!', () => {
      expect(helloWorld).toBe('Hello World!');
    });
  });

  context('when fetch fails', () => {
    it('returns ef world!', () => {
      expect(helloWorld).toBe('Hello World!');
    });
  });
});
