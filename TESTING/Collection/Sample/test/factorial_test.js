var assert = require('assert');
var Calculate = require('../factorial');

describe('Calculate', () => {
  describe('.factorial', () => {
    it('if the output of 5! is 120', () => {
      const input = 5;
      const expected = 120;
      const actual = Calculate.factorial(input);

      assert.equal(expected, actual);
    });

    it('if the output of 3! is 6', () => {
      const input = 3;
      const expected = 6;
      const actual = Calculate.factorial(input);

      assert.equal(expected, actual);
    });

    it('if the output of 0! is 1', () => {
      const input = 0;
      const expected = 1;
      const actual = Calculate.factorial(input);

      assert.equal(expected, actual);
    });

  })
});