const { assert } = require('chai');
const request = require('supertest');
const { jsdom } = require('jsdom');

const app = require('../../app');

const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};

describe('the homepage', () => {
  it('the #page-title element contains the page title', async () => {
    const pageTitle = 'My Page';
    const response = await request(app).
      get('/').
      send();
    assert.include(parseTextFromHTML(response.text, '#page-title'), pageTitle);
  });

});
