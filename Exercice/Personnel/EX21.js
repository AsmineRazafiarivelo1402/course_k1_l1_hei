// CREDIT CARD
export  function maskify(string="") {
    let myCode=""
    let lastFourCode=""
    if(!string){
        return 'ERROE'
    }else if(string.length>=1 &&string.length<5){
        myCode=string
    }else if(string.length>=5){
         lastFourCode=string.slice(string.length - 4)
    myCode='#'.repeat(string.length-4) + lastFourCode
    }
   
    return myCode
}

console.log(maskify('4556364607935616'));

// 4556364607935616 (sL