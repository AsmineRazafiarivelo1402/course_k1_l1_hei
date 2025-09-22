export function rearrangeString(string,tableau) {
    let tempValue=[]
    let finalValue=""
    let index
    if (!string || !tableau) {
        return ""
    }else{
        tempValue.length=tableau.length
        for (let i = 0; i < tableau.length; i++) {
           tempValue[tableau[i]]=string[i]
        }
        for (let j = 0; j < tempValue.length; j++) {
            finalValue+=tempValue[j]
            
        }
    }
return finalValue
}

console.log(rearrangeString("abcd", [0, 3, 1, 2]));
