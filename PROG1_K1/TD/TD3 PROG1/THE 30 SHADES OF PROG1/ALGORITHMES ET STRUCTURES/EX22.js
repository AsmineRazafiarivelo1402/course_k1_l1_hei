export function pangramme(string="") {
    let alphabet = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"]
    let word=string.toLowerCase()
    let account=0
 
 if(string.length==0 || string==undefined){
     return false
    }
    for (let i = 0; i < alphabet.length; i++) {
     
       if(alphabet[i].includes(word)){
           account++
             
       } 
    }
  
   return account


}

console.log(pangramme("This is not a pangram This is not a pangram This is not a pangram"));
console.log(pangramme("The quick brown fox jumps over the lazy dog"));
