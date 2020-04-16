const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
};

const orderSunglasses = () => {
    return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();
// console.log(orderPromise);  

//------------------------------------------------
// console.log("This is the first line of code in app.js.");

function usingSTO() {
  return console.log("This line of code will log to the console last.");

};
// setTimeout(usingSTO, 3000); 

// console.log("This is the last line of code in app.js.");
//------------------------------------------------

