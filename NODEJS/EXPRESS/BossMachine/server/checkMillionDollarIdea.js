const checkMillionDollarIdea = (instance) => {
  const worth = Number(instance.weeklyRevenue) * Number(instance.numWeeks);
  if (worth >= 1000000) {
    return true
  }
  return false;
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
