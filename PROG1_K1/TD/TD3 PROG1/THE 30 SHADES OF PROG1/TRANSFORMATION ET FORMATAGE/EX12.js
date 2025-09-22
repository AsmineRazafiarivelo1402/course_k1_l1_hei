 export function camelCase(string) {
  let newString = string.toUpperCase();
  let newTab = "";
  if(string.includes(" ")){
    return string
  }else if(string.length==0 || string==undefined){
    return ""
  }else{
    for (let i = 0; i < string.length; i++) {
      if (string[i] != newString[i] || (string[i] == newString[i] && string[i-1]==" ")) {
        newTab += string[i];
      } else if(string[i] == newString[i] && string[i-1]!=" "){
        newTab += " " + string[i];
    }
  
  
  }
  }

return newTab;
 }
console.log( camelCase("myAwesomeCode"));

