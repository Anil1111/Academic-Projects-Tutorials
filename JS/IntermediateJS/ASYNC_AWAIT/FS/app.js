const fs = require('fs');
const {promisifiedReadfile} = require('./promisifiedReadfile.js');

//Using call back function
fs.readFile('./file.txt','UTF-8', (err, data) => {
  if (err) throw err;
  let firstVal = data;
  fs.readFile('./file2.txt', 'UTF-8', (err, data) => {
    if (err) throw err;
    let secondVal = data;
    console.log(firstVal, secondVal);
  });
});


//Using promises
let firstVal;
let secondVal;
promisifiedReadfile('./file.txt', 'UTF-8')
.then((firstResolvedValue) => {
  firstVal = firstResolvedValue;
  return promisifiedReadfile('./file2.txt', 'UTF-8');
})
.then((secondResolvedValue) => {
  secondVal = secondResolvedValue;
  console.log(firstVal, secondVal);
})
.catch((rejectedResponse) => {
  console.log(rejectedResponse);
});

//Using Async Await
async function readFiles() {
  let firstVal = await promisifiedReadfile('./file.txt', 'UTF-8');
  let secondVal = await promisifiedReadfile('./file2.txt', 'UTF-8');
  console.log(firstVal, secondVal);
};
readFiles();
