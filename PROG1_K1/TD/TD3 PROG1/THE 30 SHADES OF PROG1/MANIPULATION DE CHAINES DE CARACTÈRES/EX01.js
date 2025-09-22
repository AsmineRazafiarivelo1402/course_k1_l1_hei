// export function numberAcount(string="") {
//     let newString = string.split("");
//    return newString.filter(a => Number(a)).reduce((a,v) => v++,0 )
// }
// console.log( numberAcount("test123"));

export function countNumberInString(string="") {
    let newString = string.split("")
    let numbers;
if(string.length==0 || string==undefined){
    return ""
}else{
  numbers=(newString.filter((a)=>Number(a)))  
}
 return numbers.length
}
console.log( countNumberInString("test123"));
