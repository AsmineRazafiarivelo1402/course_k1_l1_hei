function table(tableau=[]) {
    let decroissant=1
    let croissant=1
    for (let i = 0; i < tableau.length; i++) {
        
       if(tableau[i]>tableau[i+1]){
            decroissant++
       }
        
    }
    for (let i = 0; i < tableau.length; i++) {
        if(tableau[i]<tableau[i+1]){
            croissant++
       }
    }
    if (croissant==tableau.length) {
        return "yes,asc"
    }
     else if(decroissant==tableau.length){
        return "yes,desc"
    }
    else{
        return "no"
    }
   
   
}
console.log(table([1,2,3,4,5,6,7,8,9]));
console.log(table([9,8,7,6,5,4,3,2,1]));
console.log(table([1,4,8,9,6,7,,15,875,2,3,4]));


