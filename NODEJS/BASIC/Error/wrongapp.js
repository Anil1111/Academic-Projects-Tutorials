const api = require('./api.js');

let callback = (data) => {
  console.log(`Something went right. Data: ${data}\n`);
};

try {
  api.naiveErrorProneAsyncFunction('problem', callback);
} catch (err) {
  console.log(`Something went wrong. ${err}\n`);
}