const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function soak() {
  let firstResolvedVal = await shopForBeans();
  let secondResolvedVal = await soakTheBeans(firstResolvedVal);
  let thirdResolvedVal = await cookTheBeans(secondResolvedVal);
  console.log(thirdResolvedVal);
};
soak();


// shopForBeans()
//   .then((firstResolvedVal) => {
//     return soakTheBeans(firstResolvedVal);
//   })
//   .then((secondResolvedVal) => {
//     return cookTheBeans(secondResolvedVal);
//   })
//   .then((resolvedVal) => {
//     console.log(resolvedVal);
//   })