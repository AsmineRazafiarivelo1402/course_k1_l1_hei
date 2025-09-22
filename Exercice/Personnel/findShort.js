function findShort(lettre = "") {
  let indexOfSpace = [0];
  let newLetterArray = [];
  let shortWordLength;
  let largeWordLength;
  let temp = 0;
  let worldLength=[];
  for (let i = 0; i < lettre.length; i++) {
    if (lettre[i] == " ") {
      indexOfSpace.push(i);
    }
  }
  for (let i = 0; i < indexOfSpace.length; i++) {
    if (i == 0) {
      newLetterArray.push(lettre.slice(indexOfSpace[i], indexOfSpace[i + 1]));
    } else {
      newLetterArray.push(
        lettre.slice(indexOfSpace[i] + 1, indexOfSpace[i + 1])
      );
    }
  }
  //Find the shorthest word
  shortWordLength = newLetterArray[0].length;
  for (let i = 0; i < newLetterArray.length; i++) {
    if (shortWordLength >newLetterArray[i].length) {
      temp = shortWordLength;
      shortWordLength = newLetterArray[i].length;
    }
  }
  //Find the largest word
  largeWordLength = newLetterArray[0].length;
  for (let i = 0; i < newLetterArray.length; i++) {
    if (largeWordLength <newLetterArray[i].length) {
      temp = largeWordLength;
      largeWordLength = newLetterArray[i].length;
    }
  }

  return worldLength=[shortWordLength , largeWordLength] ;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
