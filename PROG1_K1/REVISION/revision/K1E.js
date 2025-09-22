export function sumTwoSmallestNumbers(tableau=[]) {
    let newArray=[]
    newArray=tableau.sort((a,b)=> a -b)
    let count = 0
    if(newArray.length==0){
        count=0
    }else{
        count = (newArray[0] + newArray[1])
    }

    return count
}