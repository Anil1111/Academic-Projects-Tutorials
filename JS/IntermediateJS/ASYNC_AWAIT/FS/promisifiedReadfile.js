const fs = require('fs');

const promisifiedReadfile = (file, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(data);
      }
    })
  });
};

module.exports = {promisifiedReadfile};