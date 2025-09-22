function hideOrnot(letter) {
    let personne=letter.indexOf("X")
    let animal=letter.indexOf("A")
    let cachette=letter.indexOf("C")
    let distanceXC= cachette - personne
    let distanceCA=  animal - cachette
   
    
    
        if(distanceXC>distanceCA ){
            return false
        } 
    
         return true

    }
console.log(hideOrnot("X..............................A"));