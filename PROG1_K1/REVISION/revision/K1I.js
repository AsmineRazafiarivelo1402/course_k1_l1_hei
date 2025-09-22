export function longestString(string="",n) {
    let maxWord=[]
    let listWord
   
    if( !string || string.length==0 || !n ){
        return []
    }else{
          listWord=string.split(" ")
        for (let i = 0; i <listWord.length; i++) {
           if(listWord[i].length>n){
            maxWord.push(listWord[i])
           }
            
        }
    }

   
    
    return maxWord
}