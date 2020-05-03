const checkMillionDollarIdea = (req, res, next) => {
  const worth = Number(req.body.weeklyRevenue) * Number(req.body.numWeeks);
  if (worth >= 1000000) {
    next();
  } else {
    return res.status(400).send();
  }
};

// const checkMillionDollarIdea = (req, res, next) => {
//   const { numWeeks, weeklyRevenue } = req.body;
//   const totalMoney = Number(numWeeks) * Number(weeklyRevenue);
//   if (!numWeeks || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000) {
//     res.status(400).send();
//   } else {
//     next();
//   }
// }


// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
