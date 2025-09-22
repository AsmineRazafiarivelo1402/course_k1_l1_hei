function entier(tableau=[]) {
    let newtableau=[]
    if(tableau.length==0){
        return []
    }else if(tableau==null || tableau==undefined){
        return []
    }else if(tableau.length>0){
        for (let i = 0; i < tableau.length; i++) {
            if(tableau[i]<0){
                 newtableau[i]= - (tableau[i])
            }else if(tableau[i]>=0){
                 newtableau[i]=tableau[i]
            }
             
         }
          
    return newtableau
    }
   
}
console.log(entier());
console.log(entier([-1,-8,-7,-9,-6,-5,-10,-4,-2]));
console.log(entier([]));
console.log(entier([1,-8,0,-9,-6,-5,10,-4,-2]));


