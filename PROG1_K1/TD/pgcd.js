function pgcd(a,b) {
    let c = a - b
    if(a == b){
        return a
    }else if(a>b){
        return pgcd(c,a)
    } else if(a<b){
        return pgcd(a, b-a)
    }
   
}
console.log(pgcd(8,16));
console.log(pgcd(8,6));
console.log(pgcd(136,127));
