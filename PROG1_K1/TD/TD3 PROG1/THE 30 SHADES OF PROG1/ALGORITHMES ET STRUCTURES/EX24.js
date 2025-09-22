export function duplicate(string="") {
    let word=string.toLowerCase()
    let newstring=""
    let acount=0
    for (let i = 0; i < word.length; i++) {
        acount=0
        for (let j = 0; j < word.length; j++) {
           if (word[i]==word[j] && i!=j) {
                     acount++ 
           }
            
        }
        if (acount>0) {
            newstring+=")"
        }else{
            newstring+="("
        }
        
    }
    return newstring
}
console.log(duplicate("din"));
console.log(duplicate("recEde"));
console.log(duplicate("Success"));
// din 
// 1e, i=0 => d

// CORRECTION

const duplicateEncoder = (string) => {
    let result = "";
    const toLowerCaseString = string.toLowerCase();
    for(const letter of toLowerCaseString){
        if(toLowerCaseString.indexOf(letter) == toLowerCaseString.lastIndexOf(letter)){
            result += "(";
        }else {
            result += ")";
        }
    }

    return result;
}
console.log(duplicateEncoder("Success"));

