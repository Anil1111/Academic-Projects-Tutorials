const testFunc = require('./game.js');

console.log("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

playGame = input => {
  testFunc.testNumber(input.toString().trim());
};
process.stdin.on('data',playGame);