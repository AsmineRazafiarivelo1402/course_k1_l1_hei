function accum(string="") {
    let letter=string.toLowerCase()
    let uppercaseLetter=letter.toUpperCase()
    let newLetter=""
    for (let i = 0; i < uppercaseLetter.length; i++) {
        if(i==0){
            newLetter+=uppercaseLetter[i]+"-";
        }else if(i>0 && i!=uppercaseLetter.length-1){
            newLetter+=uppercaseLetter[i]+(letter[i].repeat(i))+"-";
        }else if(i==(uppercaseLetter.length-1)){
            newLetter+=uppercaseLetter[i]+(letter[i].repeat(i));
        }
        
    }
    return newLetter

}
console.log(accum("cwAt"));
