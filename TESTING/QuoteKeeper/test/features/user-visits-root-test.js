const { assert } = require('chai');


describe('User visits root', () => {
  describe('posting a quote', () => {
    it('saves quotes and meta data submitted by the user', () => {
      browser.url('/'); //written on top to ensure DOM elements are properly selected

      // Setup
      const quote = 'Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.';
      const attributed = 'Marianne Williamson';
      const source = 'A Return to Love: Reflections on the Principles of A Course in Miracles';
      const quoteDOM = $('#quote');
      const attributedDOM = $('#attributed');
      const sourceDOM = $('#source');
      const quotesDOM = $('#quotes');
      const submitDOM = $('input[type=submit]');

      // Exercise
      quoteDOM.setValue(quote);
      attributedDOM.setValue(attributed);
      sourceDOM.setValue(source);
      // browser.pause(1000);
      submitDOM.click();
      // browser.setValue('#quote', quote);
      // browser.setValue('#attributed', attributed);
      // browser.setValue('#source', source);
      // browser.click('input[type=submit]');

      // Verify
      assert.include(quotesDOM.getText(), quote);
      assert.include(quotesDOM.getText(), attributed);
      assert.include(quotesDOM.getText(), source);
      // assert.include(browser.getText('#quotes'), quote);
      // assert.include(browser.getText('#quotes'), attributed);
      // assert.include(browser.getText('#quotes'), source);
    });
  });
});
