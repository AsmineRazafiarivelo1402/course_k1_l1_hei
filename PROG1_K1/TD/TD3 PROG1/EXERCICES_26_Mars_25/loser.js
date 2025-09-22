const example ={
    "Elena": 17,
    "Alice":20,
    "JAcob":15,
    "Nikolas":23,
    "Rachel":10
}
const tableau=Object.entries(example)
let arrays=[]
let newValue=[]
let minValue
 export const getLoser=(participants) => {
    if(!participants){
        return []
    }else if(participants==undefined){
        return []
    }else{
        for (let i = 0; i < tableau.length; i++) {
            newValue.push(tableau[i][1])
               }
       
           arrays=newValue.sort((a,b)=> a-b)
           minValue=arrays[0]
         for (const name of tableau){
           if(name.includes(minValue)){
               return name
           }
         }
    }
 
 
    
 }

 console.log(getLoser(example));
 






 