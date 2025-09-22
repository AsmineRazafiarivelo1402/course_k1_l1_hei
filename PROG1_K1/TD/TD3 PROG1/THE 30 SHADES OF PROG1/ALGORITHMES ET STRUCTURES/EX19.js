export function sommeMatrice(tableau=[[]]) {
    let sum=0
    let diagonale=[]
    let reversetable=[]
    let reverseDiagonale=[]
    for (let j = tableau.length -1; j>=0; j--) {
        reversetable.push(tableau[j])
         
     }
    for(let i = 0; i < tableau.length; i++) {
           diagonale.push(tableau[i][i])
          reverseDiagonale.push(reversetable[i][i])
    }
   sum=diagonale.reduce((a,v)=> a+v,0) + reverseDiagonale.reduce((a,v)=> a+v,0)
 
  
    return sum
}
console.log(sommeMatrice([[1, 2, 3],[4, 5, 6], [7, 8, 9]]));

// [1, 2, 3], [4, 5, 6], [7, 8, 9]
// 1 + 5 + 9  3 + 5 + 7 