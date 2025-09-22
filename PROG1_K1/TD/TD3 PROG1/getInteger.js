// 2.1. Créez une fonction getIntegersBetween qui va retourner dans un tableau les nombres
// entiers dans une intervalle donnée, les deux bornes (inférieure et supérieure) sont
// exclues.
// Exemple d’entrée : getIntegersBetween( 4,10)
// Sortie attendue : [5,6,7,8,9]
// Exemple d’entrée : getIntegersBetween(5,5)
// Sortie attendue : [ ]
// function getIntegersBetween(minInteger,maxInteger) {
//     let array = [];
//     if(minInteger==maxInteger){
//         return []
//     }else{
//         for (let i = minInteger+1; i <maxInteger; i++) {
//             array.push(i);     
//        }
//     }
 
//     return array;
// }
//  2.2. Refaites cet exercice avec une fonction récursive. Vous devez vous poser deux
// questions :
// -Quel est la terminaison de récursivité ?
// -Quel est l’appel récursif de la fonction ?

function getIntegersBetween(minInteger,maxInteger,array=[]) {
    array.push(minInteger+1)
    if((minInteger==maxInteger-1) || minInteger==maxInteger){
        return []
      }else   if(minInteger!=maxInteger-2){
   
       return (getIntegersBetween(minInteger+1,maxInteger,array)) 
  }
    return array
   
}
 console.log(getIntegersBetween( 4,6));
console.log(getIntegersBetween(0,21));
console.log(getIntegersBetween(3,3));
console.log(getIntegersBetween(3,4));
