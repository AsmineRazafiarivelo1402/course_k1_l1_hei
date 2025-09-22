function breakTheCode(string="",entier) {
    let message=""
    let index
    for (let i = 0; i < string.length; i++) {
        message+=string[i]
        index=i
        for (let j = 0; j < string.length; j++) {
             if(j-index==entier){
                message+=string[j]
                index=j
                if(message.length==string.length){
                    return message
                }
             }
            
        }
         
    }
  
}
console.log(breakTheCode("RFsarAbi1Dt4eeh",3));
console.log(breakTheCode("AI1SN4ME*",3));
console.log(breakTheCode("NANYMAAA3NN1JA*",3));
console.log(breakTheCode("NJNAYAANAMNJNAAA",4));
// N Y A N J A M A N A N A 3 1 * => 
