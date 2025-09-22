function countArara(chiffre) {
    let indice=[1,2]
    let indiceLetter=["anane ","adak "]
    let quotient = chiffre/indice[1]
    if(chiffre%2==0){
        return (indiceLetter[1]).repeat(quotient)
    }else if (chiffre%2==1) {
        return (indiceLetter[1]).repeat(quotient) + indiceLetter[0]
    }
    
}

console.log(countArara(13));
