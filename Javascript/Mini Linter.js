let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

//log separator
let separator = ''
for (let s = 0; s < 11; s++) {
  separator += '~ ~ ~ ';
}
let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');

console.log(storyWords);
console.log(separator);

//how many words are there in storyWords?
let counter = 0
for (let i = 0; i < storyWords.length; i++) {
  counter += 1;
}
//nevermind just log storyWords.length

console.log(counter);
console.log(separator);
//filter unnecessary words
function filterer(word) {
  return !unnecessaryWords.includes(word);
}
let betterWords = storyWords.filter(filterer);

console.log(betterWords);
console.log(separator);


//count overused words
let reallyCounter = 0;
let veryCounter = 0;
let basicallyCounter = 0;

for (let i = 0; i < storyWords.length; i++) {
  for (let j = 0; j < overusedWords.length; j++) {
    if (storyWords[i] === overusedWords[0]) {
    reallyCounter += 1;
  } else if (storyWords[i] === overusedWords[1]) {
    veryCounter += 1;
  } else if (storyWords[i] === overusedWords[2]) {
    basicallyCounter +=1 ;
  }
}
}
//since there are 3 elements inside child loop, all counter divided by 3

/*
for (let i = 0; i < storyWords.length; i++) {
  if (storyWords[i] === overusedWords[0]) {
    reallyCounter += 1;
  } else if (storyWords[i] === overusedWords[1]) {
    veryCounter += 1;
  } else if (storyWords[i] === overusedWords[2]) {
    basicallyCounter +=1;
  }
}
*/

console.log('Really: ' + reallyCounter);
console.log('Very: ' + veryCounter);
console.log('Basically: ' + basicallyCounter);
console.log(separator);

//count sentences
let sentences = 0;
/*
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
})
*/

//harder way?
last =  function(array, n) {
  if (array == null) 
    return void 0;
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));  
  }

for (let i = 0; i < storyWords.length; i++) {
  if (last(storyWords[i]) === '.' || last(storyWords[i]) === '!') {
    sentences += 1;
  }
}

console.log(sentences);
console.log(separator);

//log word count, sentence count, and overused count
function logger() {
  console.log('Word count: ' + counter);
  console.log('Sentence count: ' + sentences);
  console.log('Really count: ' + reallyCounter);
  console.log('Very count: ' + veryCounter);
  console.log('Basically count: ' + basicallyCounter);
}
logger();
console.log(separator);

//log betterWord as single string
console.log(betterWords.join(' '))
console.log(separator);

function greatest(betterWords){
    return betterWords.sort((a,b) =>
          betterWords.filter(v => v===a).length
        - betterWords.filter(v => v===b).length
    ).pop();
}

console.log(greatest(betterWords));
