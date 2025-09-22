export function whoseMove(personne="",tour) {
   let gamer=personne.toLowerCase()
    let joueur= ["white","black"];
    let boleen=true;

    if((gamer==joueur[0] && tour==boleen) || (gamer==joueur[1] && tour!=boleen)){
        return joueur[0];
    }else if ((gamer==joueur[0] && tour!=boleen) || (gamer==joueur[1] && tour==boleen)) {
        return joueur[1];
    }else if(personne.length==0 || personne==undefined || tour==undefined){
        return ""
    }

}

console.log(whoseMove("Black",true));
console.log(whoseMove("white",true));
console.log(whoseMove("black",false));
console.log(whoseMove("white",false));

