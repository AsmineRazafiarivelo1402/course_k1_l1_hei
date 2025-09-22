function negatifPositif(tableau=[]) {
    let acountPositif=0
    let acountNegatif=0
    let newtableau=[]
    if(tableau==null){
        return []
    }else if(tableau.length==0){
        return tableau
    }else if(tableau!=null && tableau.length>0){
        for (let i = 0; i < tableau.length; i++) {

            if(tableau[i]>=0){
                acountPositif++
            }else if(tableau[i]<0){
                acountNegatif+=tableau[i]
            }
            
        }
        newtableau=[acountPositif,acountNegatif]
        return newtableau
    }
  
  
        
  
 
  
}
 console.log(negatifPositif());
 console.log(negatifPositif([]));
console.log(negatifPositif([1,-3,5,-9,-78,2,8,3]));
