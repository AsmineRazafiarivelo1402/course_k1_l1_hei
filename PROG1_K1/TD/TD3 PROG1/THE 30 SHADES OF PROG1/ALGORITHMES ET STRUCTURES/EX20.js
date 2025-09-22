function verificationBrackets(string="") {
    let openBracket =[]
    let closeBracket=[]
    let bracket=0
    for (let i = 0; i < string.length; i++) {
        if(string[i]=="("){
            openBracket.push(i)
        }else if(string[i]==")"){
            closeBracket.push(i)
        }
        
    }
    if(openBracket.length==closeBracket.length){
        for (let i = 0; i<openBracket.length; i++) {
            if(openBracket[i]<closeBracket[i]){
                bracket++
            }
            
        }
    }
    if (bracket==openBracket.length) {
        return  true
    }else{
        return false
    }
    
    
    
}
console.log(verificationBrackets("(Salut"));
console.log(verificationBrackets("(())"));
console.log(verificationBrackets("(()"));



