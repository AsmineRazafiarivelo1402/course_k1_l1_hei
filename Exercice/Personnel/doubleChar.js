export function doubleChar(string) {
    let newString=""
    if(string==undefined || string.length==0){
        return ""
    }
    for (let i = 0; i < string.length; i++) {
       newString+=string[i].repeat(2)       
    }
    return newString
}


console.log(doubleChar("String"));
console.log(doubleChar("Hello World"));
console.log(doubleChar("1234!_ "));
console.log(doubleChar("a e"));
console.log(doubleChar("a_e"));



