// function croissant(tableau = []) {
//   for (let i = 0; i < tableau.length; i++) {
//     let superieur = tableau[0];
//     for (let index = 0; index < tableau.length; index++) {
//       if (tableau[index] > tableau[index + 1]) {
//         superieur = tableau[index];
//         tableau[index] = tableau[index + 1];
//         tableau[index + 1] = superieur;
//       }
//     }
//   }

//   return tableau;
// }

export function removeDuplicates(tableau = []) {
  let newArray=[]
  for (let i = 0; i < tableau.length; i++) {
    for (let index = 0; index < tableau.length; index++) {
      if (tableau[i] == tableau[index] && i != index) {
        tableau[index] = null;
      }
    }
  }
  newArray=tableau.filter((v) => v !== null);
  return newArray.sort((a,b)=>a-b)
}

console.log(removeDuplicates([1, 1, 2, 4, 5, 2, 1, 2, 3, 5, 5, 5]));
 