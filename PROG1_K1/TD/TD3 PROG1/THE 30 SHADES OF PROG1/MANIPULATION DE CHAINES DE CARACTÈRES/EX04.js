export function sumAndConcatenate(tableau=[]) {
    let newArray=[];
    let sum=newArray.push(tableau.filter((a,v)=> Number(a)).reduce((a,v)=> v+a,0));
    let concatenate=newArray.push(tableau.filter((a,v)=> isNaN(a)).join(" "));
    if(tableau.length==0 || tableau==undefined){
        return []
    }else{
        return newArray;
    }
   
    
}
console.log(sumAndConcatenate([1, "hello",2, "world"]));
