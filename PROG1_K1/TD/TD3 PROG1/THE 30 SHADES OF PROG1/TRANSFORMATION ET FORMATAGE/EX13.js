export function decodeMessage(string) {
  let newString = string.split(" ");
  let message = "";
  if(string==""){
    return ""
  }else {
    for (let i = 0; i < newString.length; i++) {
      message += newString[i][i];
    }
  }
 
  return message;
}
console.log(decodeMessage("Yet we rise"));
console.log(decodeMessage("He cannot patch passwords"));
