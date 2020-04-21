const fs = require('fs');
const readline = require('readline');

// const readDataCallback = (err, data) => {
//   if (err) {
//     console.log(`The error is ${err}`);
//   } else {
//     console.log(data);
//   }
// };

// fs.readFile('./toread.txt', 'UTF-8', readDataCallback);
const fileStream = fs.createWriteStream('toprint.txt');
const myInterface = readline.createInterface({
  input : fs.createReadStream('toread.txt')
});

const toWrite = (data) => {
  fileStream.write(`${data}\n`);
};

myInterface.on('line', toWrite);