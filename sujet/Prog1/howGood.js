
//calculer la moyenne et comparez les résultats
//retourner si true vous êtes meilleur

function sum(array){
    let total=0
    for(let i=0;i<array.length;i++){
        total=total +array[i]
    }
    return total/array.length
}

function how_Good_You_Are(classPoints=[],yourPoints) {
    classPoints.push(yourPoints)
    if(classPoints>yourPoints){
        return false
    }else if(classPoints<yourPoints){ 
        return true
    }else{
        return "Vous êtes à la moyenne"
    }
}


