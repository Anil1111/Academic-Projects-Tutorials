
const messageMixer = require('./messageMixer.js');

// to run as ES6 module - node message.js --input-type=module

function displayMessage() {
  console.log(messageMixer.countCharacter("What is the color of the sky?", "t"));
  console.log(messageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(messageMixer.reverseWord("What is the color of the sky?"));
  console.log(messageMixer.reverseAllWords("What is the color of the sky?"));
  console.log(messageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(messageMixer.encode("What is the color of the sky?"));
  console.log(messageMixer.palindrome("richard"));
  console.log(messageMixer.pigLatin("richard is a good boy.", 'T'));
}

displayMessage();