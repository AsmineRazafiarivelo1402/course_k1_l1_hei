function counterEffect(string="") {
    let array=[]
    let arrayTempo=[]
    let tableau=[]
    for (let i = 0; i < string.length; i++) {
       array.push(Number(string[i]))
    }
    for (let i = 0; i < array.length; i++) {
        arrayTempo=[]
        for (let j = 0; j <= array[i]; j++) {
           arrayTempo.push(j)
            
        }
        tableau.push(arrayTempo)
    }
    return tableau
}
console.log( counterEffect("1250"));
console.log( counterEffect("0050"));
console.log(counterEffect("0000"));


//5=> 