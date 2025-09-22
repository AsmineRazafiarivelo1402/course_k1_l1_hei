function note(tableau=[]) {
    let acc=0
    for(let i=0;i<tableau.length;i++){
        let index=i+1
        if(tableau[i]>tableau[index]){
                acc++
        }
    }
   
    
    if(acc==tableau.length-1){
        return true
    }else{
        return false
    }
    
}

console.log(note([0,9,8,7,6,5,4,3,2,1]));
