export function highAndLow(entier="") {
    let listOfNumber= entier.split(" ")
    let arrayOfumber=[]
    let  newValue
    if(!entier){
        return ""
    }
    for (let i = 0; i < listOfNumber.length; i++) {
        arrayOfumber.push(Number(listOfNumber[i]))
        
    }
    newValue=arrayOfumber.sort((a,b) => a - b)

    return  newValue[(arrayOfumber.length)-1] + " " + newValue[0] 
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 2 3 4 -5"));