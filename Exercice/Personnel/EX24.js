export function smaller(arr) {
    let smallerThanMe=[]
    if(!arr){
        return []
    }
    for (let i = 0; i < arr.length; i++) {
       smallerThanMe.push((arr[i] )- 1)
        
    }
    return smallerThanMe
}