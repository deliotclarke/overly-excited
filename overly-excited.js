let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

const addExcitement = (theWordArray, punc, howMany) => {

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

addExcitement(sentence, "!", 4)