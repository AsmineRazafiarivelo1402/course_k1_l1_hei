export function slice(data , startWith, endWith) {
  let slicetable = [];
  if(data.length==0 || startWith>=endWith || startWith==undefined || endWith==undefined || startWith>=endWith){
    return ""
  }
  else   if (startWith >= 0 && endWith <= data.length && data.toString && startWith<endWith) {
 
        for (let i = startWith; i < endWith; i++) {
            slicetable+=(data[i]);
          }
   
    return slicetable;
  }
  
}
console.log(slice("",3,7));
console.log(slice([1, "hello", 2, "world"],1,3));




