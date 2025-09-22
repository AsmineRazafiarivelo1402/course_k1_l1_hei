// order("is2 Thi1s T4est 3a")  "Thi1s is2 3a T4est"
// order("4of Fo1r pe6ople g3ood th5e the2"  "Fo1r the2 g3ood 4of th5e pe6ople"
// order("")  ""

// export const order = (string="") => {
// let newString = string.split(" ")
// let tmpString = []
// let orderString=""
// if(!string){
//     orderString=""
// }
// for (let i = 0; i < newString.length; i++) {
//     for (let j = 0; j < newString[i].length; j++) {
//         if(Number(newString[i][j]) ){
//             let index = newString[i][j] - 1
//             tmpString[index] = newString[i]
            
//         }
        
//     }
    
// }
// orderString = tmpString.join(' ');
// return orderString

// }
// order("is2 Thi1s T4est 3a")

function order(words) {
return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) -
wordB.match(/\d+/)).join(' ')
}

console.log(order("is2 Thi1s T4est 3a"));
