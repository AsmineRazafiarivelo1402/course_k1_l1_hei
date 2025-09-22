// const countBits = (entier) => {
//     let binaire
   
// if(entier==0){
// binaire=0
// }else if(entier==1){
//     binaire=1
// }else {
//     division(entier)
// }
// console.log(rest, quotient);

// }
// countBits(12)

const division = (entier) => {
 let quotient = Math.floor(entier/2)
 let tmpbin=""
 let rest = entier%2
 let binaire =""
if(entier==0){
    tmpbin=0
}else if(entier==1){
    tmpbin=1
}else if(entier<2) {
    tmpbin+=(rest)
    tmpbin+=(quotient)
if(quotient>=2){

    tmpbin+=(division(quotient))
    
}
}
for (let i =  ((tmpbin.length) -1); i >=0; i--) {
   binaire+=tmpbin[i]
    
}
return tmpbin;
 
}
console.log((1234).toString(2));

console.log(division(0));
 console.log(division(1));
console.log(division(2));
console.log(division(3));
 console.log(division(4));
console.log(division(5));
console.log(division(6));
 console.log(division(7));
console.log(division(8));
console.log(division(9));
 console.log(division(10));
console.log(division(1234));


//    do {
//     rest.push(entier%2)
//      entier=Math.floor(entier/2)
     
//    } while (entier>2);
//    binaire=rest