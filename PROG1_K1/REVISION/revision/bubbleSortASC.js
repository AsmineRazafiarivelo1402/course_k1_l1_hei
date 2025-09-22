// const bubbleSortASC = (array) => {
//     let tmp ;
//     for (let i = 0; i < array.length-1; i++) {
       

//         for (let j = 0; j < array.length; j++) {
//             if (array[j]>array[j+1]) {
//                let tmp = array[j+1]
//                 array[j+1] = array[j]
//                 array[j] = tmp
//             }
           
            
//         }
        
//     }

//     return array
// }
// console.log(bubbleSortASC([7,4,3,2,1]));



const selectionSortASC = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i+1; j < array.length ; j++) {
            if (array[i]>array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
             console.log(array);
        }

        
    }
    return array
}
console.log(selectionSortASC([188,173,163,155,150]));

// TRI PAR FUSION

// function fusionSortASC = () => {}

//  C'est quoi un objet ?

// INSTALLER JDK 17+
// IF (RAM >= 8){ INSTALL(INTELLIJ IDEA)} else {install(ext VSCode)};