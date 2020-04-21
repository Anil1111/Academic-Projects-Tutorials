module.exports = {

  errorProneAsyncApi: (input, callback) => {
    console.log(`Running errorProneAsyncApi with input: ${input}...\n`);
    setTimeout(() => {
      let myErr;
      if (input === 'problem') {
        myErr = new Error('whoops!');
        callback(myErr);
      } else {
        let responseData = `Received valid input "${input}"`;
        callback(myErr, responseData);
      }

    },0);
  },

  //error cannot be caught during an asynchronous function
  naiveErrorProneAsyncFunction: (input, callback) => {
    console.log(`Running naiveErrorProneAsyncFunction with input: ${input}...\n`)
    setTimeout(() => {
      if (input === 'problem') {
        throw new Error('whoops');
      } else {
        let responseData = `Received valid input "${input}"`;
        callback(responseData);
      }         
    }, 0);
  }




};