const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner()
    .then((meal) => {
	    console.log(`I'm going to make ${meal} for dinner.`);
    })
}
// nativePromiseDinner();

// async/await version:
// const announceDinner = async () => {
//   // Write your code below:
//   let meal = await brainstormDinner();
//   console.log(`I'm going to make ${meal} for dinner.`);
// };

async function announceDinner(){
  // Write your code below:
  let meal = brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
};

announceDinner();