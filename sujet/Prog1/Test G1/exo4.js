function hasDuplicate(tableau=[]) {
     for(let i=0;i<tableau.length;i++){
        for(let index=0;index<tableau.length;index++){
            if(tableau[i]==tableau[index] && i!=index){
                return true               
            }
        }
    }
    return false
}
   
    
   
    console.log(hasDuplicate([1,2,3,4,5,1]))