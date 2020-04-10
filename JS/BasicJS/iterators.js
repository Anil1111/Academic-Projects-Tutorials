let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
console.log(`The word count is ${storyWords.length}`); //Word Count

// const betterWords = storyWords.filter(words => {
//   let i = 0;
//   do {
//     if (words === unnecessaryWords[i]) {
//         return false;
//     }
//     i++;
//   } while(i < unnecessaryWords.length-1);
//   return true;
// });

const betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);  //includes returns true pr false based on the presence of the item in the lsit
});
console.log(betterWords.join(' ')); 



// const count = storyWords.reduce((accword, currword) => {
//   for(let i=0; i < overusedWords.length; i++) {
//     if (currword === overusedWords[i]) {
//       accword++;
//     }
//   }
//   return accword;
// }, 0);
// console.log(`The count of overused words is ${count}`);

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords) {   //FOR LOOP
  word === 'really' ? reallyCount++ : '';
  word === 'very' ? veryCount++ : '';
  word === 'basically' ? basicallyCount++ : '';  
};
console.log(`The count of really is ${reallyCount}, and that of very is ${veryCount}, and that of basically is ${basicallyCount}`);

const totalSentences = storyWords.reduce((accword, currword) => {
  let tempword = currword.split('');
  let char = tempword.pop();
  if (char === '.' || char === '!') {
   accword++;
  }
  return accword;
}, 0);

// let sentenceCount = 0;
// for (word of storyWords) {   
//   if (word[word.length-1] === '.' ||  word[word.length-1] === '!') {
//     sentenceCount++;
//   };
// };


console.log(`The sentence count is ${totalSentences}`);


