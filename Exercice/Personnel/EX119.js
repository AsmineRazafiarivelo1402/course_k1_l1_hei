const hastag = (text) => {
  let tmpText; // Variable to combine the string without space
  let listWord; // array to content all word in string without space
  let newText; // final word with #
  if (!text) {
    return false;
  }
  listWord = text.split(" ");
  tmpText = listWord.join("");
  if (tmpText.length < 140 && /[A-Z]/g.test(tmpText[0])) {
    newText = "#" + tmpText;
  } else {
    newText = false;
  }

  return newText;
};
console.log(hastag(" Hello there thanks for trying my Kata"));
console.log(hastag("    Hello     World   "));
console.log(hastag(""));
