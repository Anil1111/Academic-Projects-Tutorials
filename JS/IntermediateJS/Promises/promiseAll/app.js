const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
const prom = Promise.all([checkAvailability('Mango','Mazaa'), checkAvailability('Veggies','BigBasket'), checkAvailability('diaper', 'Amazon')]);
prom
  .then((resolvedValue) => {
    onFulfill(resolvedValue);
  })
  .catch((rejectedResponse) => {
    onReject(rejectedResponse);
  })

  // prom
  // .then(onFulfill)
  // .catch(onReject);