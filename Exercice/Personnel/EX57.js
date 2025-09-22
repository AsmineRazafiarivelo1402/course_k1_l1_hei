const atomicNumber = (atome)=> {
    let n
    let couche = []
    let m
while(atome>0){
m=2*Math.pow(n,2)
if(atome>=m){
    atome-=m
    couche.push(m)
    n++
}else{
    couche.push(m)
    atome=0
}
}
console.log(couche);
 
}

atomicNumber (47);
atomicNumber (1) 
atomicNumber (10) 
atomicNumber (11)