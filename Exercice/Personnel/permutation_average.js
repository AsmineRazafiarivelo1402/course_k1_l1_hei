function permutation2chiffre(n) {
   let x=(((n%10) *10) + (n/10))
   let tableau = [ n,Math.floor(x)]
   return tableau
}


function manalaString(string,n) {
   let andrana = string.indexOf(n)
   let accumulateur = ""
   for (let i = 0; i < string.length; i++) {
            if(i!=andrana){
                accumulateur+=string[i]
            }
    
   }
   return Number(accumulateur)
}

 

function permutation(nombre) {
    let chiffre = ''+nombre
    let variable=0
    let resultat
    let rs = []
    for (let i = 0; i < chiffre.length; i++) {
        if (chiffre.length == 3) {
            resultat=permutation2chiffre(manalaString(chiffre,chiffre[i]))
            for (let index = 0; index < resultat.length; index++) {
                variable=chiffre[i]+resultat[index]
                rs.push(variable)
           }
        } else if (chiffre.length > 3) {
                let rss = permutation(manalaString(chiffre,chiffre[i]))
                for (let index = 0; index < rss.length; index++) {
                    rs.push(chiffre[i]  + rss[index])
                }
        } else if (chiffre.length == 2) {
            return permutation2chiffre(nombre)
        }

    }
    return rs
 }

 function permutation_average(nb) {
    let all_permutation = []
    let res_permutation = permutation(nb)
    let resultat
    for (let i = 0; i < res_permutation.length; i++) {
        if (!all_permutation.includes(Number(res_permutation[i]))) {
            all_permutation.push(Number(res_permutation[i]))
        }
    }
    // resultat = calcul;
    
    if (nb < 10) {
        return nb
    } else 
        return Math.ceil(all_permutation.reduce((a, v)=> a+v, 0)/(all_permutation.length));
 }
console.log(permutation_average(1256))