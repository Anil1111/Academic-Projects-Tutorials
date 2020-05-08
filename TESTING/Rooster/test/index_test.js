const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {

    it('returns a rooster call', () => {
      const actual = 'moo!';
      const expected = Rooster.announceDawn();

      assert.equal(actual, expected);
    });
  });

  describe('timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const hour = 3;
      const expected = '3';
      const actual = Rooster.timeAtDawn(hour);

      assert.strictEqual(expected, actual);
    });
  });

  it('throws an error if passed a number less than 0', () => {
    const inputHour = -1;
    const expected = RangeError;

    assert.throws(() => {
      Rooster.timeAtDawn(inputHour);
    }, expected);

  });

  it('throws an error if passed a number greater than 23', () => {
    const hour = 25;

    assert.throws(() => {
      Rooster.timeAtDawn(hour)
    }, RangeError);
  });

});
