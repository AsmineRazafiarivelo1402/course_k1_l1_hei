function popshift(originalstring = "") {
  let firststring = "";
  let secondstring = "";
  let remaningstring = "";
  let index = originalstring.length;
  let laststring = "";
  let newstring = [];
  for (let i = 0; i < originalstring.length; i++) {
    if (firststring.length != Math.floor(index / 2)) {
      firststring += originalstring[i];
      secondstring += originalstring[index - 1 - i];
      remaningstring = originalstring.slice(i + 1, index - i - 1);
    }
  }
  newstring=[firststring,secondstring,remaningstring]

  return newstring;
}
console.log(popshift("exempletesthere"));
console.log(popshift("reusetestcasesbitcointakeovertheworldmaybewhoknowsperhaps"));
console.log(popshift( "letstalkaboutjavascriptthebestlanguage"));
console.log(popshift( "iwanttotraveltheworldwritingcodeoneday"));
console.log(popshift("letsallgoonholidaysomewhereverycold"));
console.log(popshift("turnsoutrandomtestcasesareeasierthanwritingoutbasicones"));

console.log(popshift("aa" ));
console.log(popshift("b" ));
console.log(popshift(""));


