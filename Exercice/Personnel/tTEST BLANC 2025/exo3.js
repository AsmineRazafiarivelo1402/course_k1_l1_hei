function croissant(tableau = []) {
  for (let i = 0; i < tableau.length; i++) {
    let superieur = tableau[0];
    for (let index = 0; index < tableau.length; index++) {
      if (tableau[index] > tableau[index + 1]) {
        superieur = tableau[index];
        tableau[index] = tableau[index + 1];
        tableau[index + 1] = superieur;
      }
    }
  }

  return tableau;
}
function getMax(tableau=[]) {
    
    let newtableau=croissant(tableau)
    let index=newtableau.length-1
    let i=newtableau.length-2
    return  newtableau[index] + newtableau[i]
    
}

function getMax2(tableau=[]){
    let newtableau=tableau.sort((a,b)=>b-a)
    return  newtableau[0] + newtableau[1]
    
}
console.log(croissant([102,14,2,23,19,]));
console.log(getMax2([102,14,2,23,19,]));

console.log(getMax([102,14,2,23,19,]));
