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

describe('root page', () => {
  describe('GET request', () => {
    it('returns a 200 status', async () => {
      const response = await request(app).
        get('/messages');
      assert.equal(response.status, 200);
    });

    it('contains the correct title', async () => {
      const response = await request(app).
        get('/messages');

      console.log(parseTextFromHTML(response.text, '#page-title'));
      assert.equal(parseTextFromHTML(response.text, '#page-title'), 'Messaging App')

    });
  });
});


// describe('/messages', () => {

//   describe('POST', () => {
//     describe('when the Message is valid', () => {
//       it('redirects to the index', async () => {
//         const author = 'Inquisitive User';
//         const message = 'Why Test?';

//         const response = await request(app)
//           .post('/messages')
//           .type('form')
//           .send({ author, message });

//         assert.equal(response.status, 302);
//         assert.equal(response.headers.location, '/');
//       });
//     });

//       describe('when the author is blank', () => {
//         it('renders an error message', async () => {
//           const message = 'Server Testing';

//           const response = await request(app)
//             .post('/messages')
//             .send({ message });

//           assert.equal(response.status, 400);
//           assert.equal(JSON.parse(response.text).message, 'Every message requires an author')
//         });
//     });

//   });
// });

//WILL fail as test needs to be written in Model
describe('when the Message is valid', () => {
  it('creates a new message', async () => {
    const author = 'user name';
    const message = 'feature testing with TDD makes me feel empowered to create a better workflow';

    //save message
    const response = await request(app)
      .post('/messages')
      .type('form')
      .send({ author, message });

    //check database to verify message is saved
    assert.ok(await Message.findOne({ message, author }), 'Creates a Message record');
  });


