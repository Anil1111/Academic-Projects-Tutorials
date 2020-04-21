const api = require('./api.js');

let callback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};


api.errorProneAsyncApi('problem', callback);

