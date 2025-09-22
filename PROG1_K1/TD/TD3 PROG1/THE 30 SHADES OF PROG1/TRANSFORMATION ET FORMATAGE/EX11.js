function accum(string) {
    let newString=string.toUpperCase().split("")
    let newTab=[]
    for (let i = 0; i < newString.length; i++) {
    if(i==0){
        newTab.push((newString[i]))
    }else(
        newTab.push(newString[i]+(string[i]).repeat(i))
    )
              
            
}
return newTab.join("-")
}
console.log(accum(("abcd")));
let letter = "a"
console.log( letter.repeat(2));

