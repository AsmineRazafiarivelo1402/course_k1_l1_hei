//  function palindrome(string="") {
//      let letter = string.toLowerCase()
//      let index = letter.length -1
//      let note = 0
//      for (let i = 0; i < letter.length; i++) {
//         if(letter[i]==letter[index -i]){
//              note++

//         }

//      }
//      if(note==letter.length){
//          return true
//      }
//      return false
//  }

function palindrome(string = "") {
  let word = string;
  let word1 = word.slice(1, word.length - 1);

  if (string.length <= 3 && string[0] == string[string.length - 1]) {
    return true;
  } else if (string[0] == string[string.length - 1]) {
    return palindrome(word1);
  } else {
    return false;
  }
}
console.log(palindrome("a"));
console.log(palindrome("aa"));
console.log(palindrome("aya"));
console.log(palindrome("kayak"));
console.log(palindrome("anna"));
console.log(palindrome("ressasser"));
console.log(palindrome("bonjourb"));
