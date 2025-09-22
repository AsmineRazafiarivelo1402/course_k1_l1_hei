function toJadenCase(string=""){
    string.toLowerCase()
    let newString=""
    
    for (let index = 0; index <string.length; index++) {
        if(index==0){            
           newString+=string[index].toUpperCase();            
        }
        if(string[index-1]==" " || string[index-1]=="'"){
            newString+=string[index].toUpperCase();
            
        }else if((string[index-1]!=" " || string[index-1]=="'")&& index!=0){
            newString+=string[index]
        }
       
    }
    return newString
}
console.log(toJadenCase("je m'appelle Asmine Razafiarivelo, je suis né le 14 Février 2003 à Sakalalina Ihosy"));
