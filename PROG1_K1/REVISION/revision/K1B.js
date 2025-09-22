export function addUnderscore(number) {
    let chiffre="";
    chiffre+=number
    let entier = chiffre.split('')
    let table = [] 
    let newtable =""
   if(number == 0){
        return 0
    }else if(Number(chiffre)==1){
        return 1
    }else {
        for (let i = 0; i < entier.length; i++) {
           table.push(Number(entier[i]))
        }

    for (let i = 0; i < table.length ; i++) {
       if(table[i]%2!=0 && table[i+1]%2!=0 && i!=table.length - 1){
            newtable+=table[i]
            newtable+="-"
       }else{
        newtable+=(table[i])
       }
        
    }
    }
 
    return newtable
    
}

console.log(addUnderscore(454793));
