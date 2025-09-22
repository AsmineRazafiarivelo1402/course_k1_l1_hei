function doubleCheck(string){
    let str=string.toLowerCase()
       for (let i = 0; i < str.length-1; i++) {
           if(str[i]==str[i+1]){
                return true
            }       
    }
    return false
}

console.log(doubleCheck("AbaBcc"));
