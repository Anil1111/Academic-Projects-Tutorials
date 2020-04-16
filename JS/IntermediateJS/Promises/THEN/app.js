const checkInventory = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

const handleSuccess = (resolvedValue) => {
  console.log('fulfilled');
}
const handleFailure = (rejectionResponse) => {
  console.log('rejected');
}

// checkInventory(order).then(handleSuccess, handleFailure);
// checkInventory(order)
// .then(handleSuccess)
// .catch(handleFailure);
// or
checkInventory(order)
.then((resolvedValue) => {
  console.log('fulfilled');
})
.catch((rejectedResponse) => {
  console.log('rejected');
});
