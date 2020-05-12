// test/models/quote-test.js
const { assert } = require('chai');
const { mongoose, databaseUrl, options } = require('../../database');
const Quote = require('../../models/quote');

describe('Quote', () => {
  beforeEach(async () => {
    await mongoose.connect(databaseUrl, options);
    await mongoose.connection.db.dropDatabase();
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  describe('#quote', () => {
    it('is a string', () => {
      const quote = 1;

      const citation = new Quote({
        quote: quote
      });

      assert.strictEqual(citation.quote, quote.toString());
    });
  });

  describe('#attributed', () => {
    it('is a String', () => {
      const attributed = 'James Baldwin';

      const citation = new Quote({ attributed });

      assert.isString(citation.attributed);
      assert.strictEqual(citation.attributed, attributed);
    });
  });

  describe('#source', () => {
    it('is a String', () => {
      const source = 'Notes of a Native Son';

      const citation = new Quote({ source });

      assert.isString(citation.source);
      assert.strictEqual(citation.source, source);
    });
  });

});