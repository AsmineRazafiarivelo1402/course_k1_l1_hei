export function matrice(tableau=[],array=[],somme) {
    let sum=[]
    for (let i = 0; i < tableau.length; i++) {
        if(tableau.length!=array.length){
            return "Il faut que les tableaux ont de même taille."
        }else if(somme=="+"){
            sum.push(tableau[i]+ array[i])
        }else if(somme=="-"){
            sum.push(tableau[i]+(array[i])*(-1)) 
        }
        
    }
    return sum
}
console.log(matrice([1,2,1,3],[4,1,5,3],"+"));
console.log(matrice([1,2,0,4,3,-1],[5,2,3,1,3,4],"-"));

export function someMatrice(tableau=[],array=[],operator) {
    let somme =[]
    
    if ((tableau.length ==0 && array.length ==0) || (!tableau && !array)) {
        return []
    }else if(!operator || operator=="+"){
       for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            somme.push((array[i][j]) + (tableau[i][j]))
            
        }
        
       }
    }else if(operator=="-"){
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                somme.push((  (tableau[i][j])-array[i][j]))
                
            }
    }
}
return somme
}
 console.log(someMatrice([[1,2,0],[4,3,-1]],[[5,2,3],[1,3,4]],"+"));
 console.log(someMatrice([[1,2,0],[4,3,-1]],[[5,2,3],[1,3,4]],"-"));