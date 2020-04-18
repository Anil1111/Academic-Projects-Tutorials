let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinner() {
  let sidePromise  = cookBeans();
  let vegetablePromise  = steamBroccoli();
  let starchPromise  = cookRice();
  let proteinPromise  = bakeChicken();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
};
serveDinner();

const serveDinner2 = async () => {
  let prom = await Promise.all([cookBeans(), steamBroccoli(), cookRice(), bakeChicken() ]);
  prom.forEach(item => console.log(item));
};
serveDinner2();



