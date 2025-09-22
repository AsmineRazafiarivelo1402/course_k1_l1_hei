function scramble(string1, string2) {
  let scrambleString = "";

  for (let i = 0; i < string2.length; i++) {
    for (let j = 0; j < string1.length; j++) {
      if (string2[i] == string1[j]) {
        scrambleString += string1[j];
        break
      }
    }
  }
  if (scrambleString==string2) {
    return true
  }
 return false
}
console.log(scramble("rkqodlw", "world"));
 console.log(scramble("cedewaraaossoqqyt", "codewars"));
 console.log(scramble('katas', 'steak'));
 
 