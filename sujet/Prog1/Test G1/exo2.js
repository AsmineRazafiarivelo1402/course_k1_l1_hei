let number =0
function sum(tableau) {
    let somme=0
    for(let i=0;i<tableau.length;i++){
        somme+=tableau[i]
        
    }
    return somme
}
function mean(tableau) {
   return sum(tableau) / tableau.length
}
function square(tableau) {
  let result=[]
  for(let i=0;i<tableau.length;i++){
      result.push(tableau[i]* tableau[i]);
  }
  return result
}


function variance(tableau) {
 let var1= mean(square(tableau))
  let var2=mean(tableau) * mean(tableau)
  console.log(var1+" et "+var2);
  
  return var1 - var2

}
function standardDeviation(tableau) {
  let standart= Math.sqrt(variance(tableau))
  return standart
}
console.log(square([5,10,3,65]));
 console.log(mean([5,10,3,65]));
 console.log(mean([ 2, 3, 6 ]));
 
// // console.log(Math.sqrt(mean([1,2,3,4])));
// // console.log(square([1,2,3,4]) - (Math.sqrt(mean([1,2,3,4]))) );
console.log(variance([2,3,6]));
console.log(standardDeviation([2,3,6]));















