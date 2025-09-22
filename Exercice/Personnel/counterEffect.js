function counterEffect(tableau=[]) {
    let newtableau=[]
    let newarray=[]
    for (let i = 0; i < tableau.length; i++) {
        newtableau=[]
       for (let index = 0; index <=tableau[i]; index++) {
        if(index<tableau[i]){
             newtableau.push(index)
        }
           
            if (index==tableau[i]) {
                newtableau.push(index)
            }
        
       }
       newarray.push(newtableau)
    }
       
    return newarray;
}

console.log( counterEffect("1250") );  // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]
console.log( counterEffect("0050") ); // [[0],[0],[0,1,2,3,4,5],[0]]
console.log( counterEffect("0000")); // [[0],[0],[0],[0]]