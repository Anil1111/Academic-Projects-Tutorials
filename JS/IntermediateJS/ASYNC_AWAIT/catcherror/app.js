const cookBeanSouffle = require('./library.js');

// Write your code below:
// async function hostDinnerParty() {
//   try {
//     let beanStatus = await cookBeanSouffle();
//   } catch (e) {
//     console.log(e);
//   }
// };

async function hostDinnerParty() {
    let beanStatus = await cookBeanSouffle();
};
hostDinnerParty()
  .catch((e) => console.log(e));


