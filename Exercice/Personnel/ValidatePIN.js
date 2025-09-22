function  ValidatePIN(string="") {
    let nombre=["0","1","2","3","4","5","6","7","8","9"]
    string.toLowerCase()
    for (let i = 0; i < string.length; i++) {
        if(!nombre.includes(string[i])){
            return false
        }      
    }
    if((string.length==4 || string.length==6) ){
        return true
    }else{
        return false
    }
   
}
console.log(ValidatePIN ("a122"));
