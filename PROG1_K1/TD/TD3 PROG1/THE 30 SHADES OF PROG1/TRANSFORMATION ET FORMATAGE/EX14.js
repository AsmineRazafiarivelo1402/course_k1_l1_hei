export function pascalCase(string="") {
    let newString=string.split(" ").join
    let pascal=""
    let count=0
  
    if(string.length==0){
        return ""
    }else if(string==undefined){
        return ""
    }   else {
        for (let i = 0; i < string.length; i++) {
            if(i==0){
                pascal+=string[i].toUpperCase()
            }else if(string[i-1]==" "){
                pascal+=string[i].toUpperCase()
            }else if(string[i]!=" ") {
                pascal+=string[i].toLowerCase()
            }
            
        }
    }
    return pascal
}
console.log(pascalCase("miriame asmine"));
console.log(pascalCase("Miriame Asmine"));
console.log(pascalCase("MIRIAME ASMINE"));
console.log(pascalCase("miriameasmine"));
console.log(pascalCase("MIRIAMEASMINE"));
console.log(pascalCase("MiriameAsmine"));
console.log(pascalCase("miriameAsmine"));


