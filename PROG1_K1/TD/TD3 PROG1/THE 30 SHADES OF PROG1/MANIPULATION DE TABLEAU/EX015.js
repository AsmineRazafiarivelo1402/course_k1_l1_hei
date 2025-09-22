export function deleteMinValue(tableau=[]) {
    let min = tableau[0]
    let firstIndex = 0
    let newArray=[]
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau.length; j++) {
          if(min>tableau[j]){
            min=tableau[j]
            firstIndex=j
          }
        }
    }
    for (let i = 0; i < tableau.length; i++) {
        if( i!= firstIndex ){
            newArray.push(tableau[i])
        }
        
    }
    
    
    return newArray

}
// export function deleteMinValue(tableau=[]) {
//     let minvalue=tableau[0]
//     let newTableau=tableau
//     let array=tableau
//     let newArray=[]
// if(tableau.length==0 && tableau==undefined){
//     return []
// }else{
//    newArray=newTableau.sort((a,b)=>a-b)
// }
// minvalue=newArray[0]

// for (let i = 0; i < array.length; i++) {
//    if(minvalue==array[i]){
//     array[i]==null
//     break
//    }
    
// }
// return array
// }

console.log(deleteMinValue([7, 1, 4, -15,-5] ));
console.log(deleteMinValue([7, 1, 1, 4, 0,1] ));