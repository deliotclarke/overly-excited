// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray, punc, howMany) {

  // Each time the for loop executes, you're going to add one more word to this string
  let buildMeUp = ""
  let counter = 0;
  for (let i = 0; i < theWordArray.length; i++) {
    if (i === 0) {
      buildMeUp += `${theWordArray[i]}`
      counter++;
      console.log(buildMeUp);
    } else {
      buildMeUp += ` ${theWordArray[i]}`;
      counter++;
      console.log(buildMeUp);
      if (counter !== 0 && counter % 3 === 0) {
        for (let j = 0; j <= howMany; j++) {
          buildMeUp += `${punc}`;
        }
        console.log(buildMeUp);
      }
    }
  }
}
// Print buildMeUp to the console



// Invoke the function and pass in the array
addExcitement(sentence, "*", 4)