function letterCount(string,letter) {
    let count=0
    for (let i = 0; i < string.length; i++) {
        if(letter==string[i]){
            count++
        }
        
    }
    return count
}
let vowel=["a","e","y","u","i","o"]
function vowelCount(string2) {
    let compte=0
    let r=0
    for(let i=0;i<string2.length;i++){
        for(let j=0;j<string2.length;j++){
            
            if((string2.slice(j,j+1))===vowel[i]){
                compte++
            }
        
        }
    }
    return compte
}
function consonantCount(string3) {
    let cpte=0
   for (let i = 0; i <string3.length; i++) {
    if (string3.slice(i,i+1)!=vowel[0] && (string3.slice(i,i+1)!=vowel[1]) && (string3.slice(i,i+1)!=vowel[2])&& (string3.slice(i,i+1)!=vowel[3]) && (string3.slice(i,i+1)!=vowel[4]) && (string3.slice(i,i+1)!=vowel[5]) ) {
        cpte++
    }
    
   }

    return cpte
}
function isIncluded(string4,letter1) {
    for (let i = 0; i <letter1.length; i++) {
        if((string4.slice(0,string4.length)==(letter1.slice(i,i+string4.length)))){
            return true
        }
        
    }
    return false
}
// removeAccents : qui soit un string, va remplacer [é,è,ê] par e, à par a et retourne
// le nouveau string produit.
let accent="àéèê";
function removeAccents(string5) {
    for (let i = 0; i <string5.length; i++) {
               
    }
    
}
