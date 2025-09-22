export function differenceInArrays(tableau=[],array=[]) {
  let newArray=tableau;
  if(tableau.length==0 || array==undefined){
    return []
  }else   if(tableau.length==undefined || array.length==0){
    return []
  }else{
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(newArray[i]==array[j]){
                newArray[i]=null
            }
        }
        
      }
  }

  return newArray.filter((a) => a!=null)
}
console.log(differenceInArrays([1,2,3],[1,3]));
console.log(differenceInArrays([1,5,10] , [ ]));
console.log(differenceInArrays([],[1,3]));
