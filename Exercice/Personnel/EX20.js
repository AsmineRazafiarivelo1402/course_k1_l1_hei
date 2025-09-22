// CARRÉ DES NOMBBRES
 export function square(entier) {
    
    let squareNumber=""
    let numberToString=entier.toString()
    for (let i = 0; i < numberToString.length; i++) {
       squareNumber+=(Number(numberToString[i])) * (Number(numberToString[i]))
    }
     return Number(squareNumber ) 
  }
  console.log(square(9119));
  

  