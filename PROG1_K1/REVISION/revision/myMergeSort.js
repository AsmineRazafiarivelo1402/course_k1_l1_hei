const division = (tableau) => {
    let firstTableau = []
    let secondTableau = []
    if(tableau.length%2 == 0 && tableau.length==2){
        firstTableau = tableau.slice(0,(tableau.length/2))
        secondTableau = tableau.slice((tableau.length/2 ),(tableau.length ))
    }else if(tableau.length%2 != 0 && tableau.length==2){
         firstTableau = tableau.slice(0,((tableau.length/2)+1))
        secondTableau = tableau.slice(((tableau.length/2)+1),(tableau.length ))
    }else if(tableau.length)

    return {firstTableau, secondTableau}
} 

console.log(division([34, 7, 23, 32, 5, 62,14]));
