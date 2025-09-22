const puissance = (base, exposant) =>{
    // puissance(5,3)=puissance(5,2) * 5
    // puissance(5,3)=puissance(5,1) * 5 *5
    // puissance(5,3)=puissance(5,0) * 5 *5 *5
    // puissance(5,3)= 1*5*5*5

    if(exposant==0){
        return 1 
    }
     return (puissance(base, exposant-1)) * base
}
console.log(puissance(2,10));

