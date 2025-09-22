export function removeChar(string) {
    let element;
  if(string.length==0 || !string){
    return ""
  }else{
     element = string.slice(1,string.length-1)
  }
    
    return element
}
console.log(removeChar("Ceci est une phrase"));

// console.log("rasmines".slice(1,("rasmines".length)-1));
