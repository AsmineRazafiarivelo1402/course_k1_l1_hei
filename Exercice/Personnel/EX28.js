// export const killcount = (counselers,jason) =>{
// let listOfCOunselers = []
// if(!counselers || !jason){
//     listOfCOunselers = []
// }else {
//     for (let i = 0; i < counselers.length; i++) {
        
//             if(counselers[i][1]<jason){
//                 listOfCOunselers.push(counselers[i][0])
//             }
       
        
//     }
// }
// return listOfCOunselers
// }

// export const killcount = (cs,j) => cs.filter(c=>c[1]<j).map(c=>c[0])

// export function killcount(counselors, jason){
// return counselors.reduce((a,v)=>(v[1]<jason) ? a.concat(v[0]) : a, [])
// }

export const killcount = (cs, j) => cs.reduce((a, [s, k]) => k < j ? (a.push(s), a) : a, [])